import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import {
  Search, MessageCircle, X, Youtube, Clock, Swords, Shield, Flame, Zap,
  Star, BookOpen, Send, ChevronLeft, ChevronRight, Newspaper, Library,
  Bookmark, BookmarkCheck, Trophy, Sparkles, Bell, Rss, ArrowRight,
  TrendingUp, Calendar, Home, Grid3X3
} from "lucide-react";
import { GAMES, QUESTS, type Quest } from "../generated/data";
import { isTabLive, IS_STAGING, LIVE_TABS } from "../config/promotion";

// ─── Data ─────────────────────────────────────────────────────────────────────
// GAMES / QUESTS come from the live quest dataset (see scripts/gen-data.mjs).

interface NewsItem {
  id:number; type:"new-quest"|"update"|"featured"|"new-game"|"community";
  date:string; title:string; body:string; game?:string; tag?:string;
}

const NEWS: NewsItem[] = [
  { id:1, type:"new-quest", date:"Jul 5, 2026",  title:"12 new Elden Ring quests added",            game:"Elden Ring",                    body:"We've documented 12 additional questlines from the Shadow of the Erdtree DLC — including Thiollier's full arc and the Hornsent's revenge questline.", tag:"New Content" },
  { id:2, type:"featured",  date:"Jul 4, 2026",  title:"Quest of the Week: The Bloody Baron",       game:"The Witcher 3: Wild Hunt",       body:"This week we're spotlighting one of the most acclaimed quests in RPG history. Every branch, every consequence — how your early Whispering Hillock choice changes everything.", tag:"Featured" },
  { id:3, type:"new-game",  date:"Jul 2, 2026",  title:"Dragon's Dogma 2 now in the database",      body:"We've added Dragon's Dogma 2 with 28 documented quests — including the full Sphinx riddle chain and every Pawn-related story mission.", tag:"New Game" },
  { id:4, type:"update",    date:"Jun 30, 2026", title:"BG3 Patch 8 quest changes documented",      game:"Baldur's Gate 3",               body:"Larian's Patch 8 changed outcomes for several companion questlines. We've updated Karlach's ending and Minthara's recruitment steps.", tag:"Updated" },
  { id:5, type:"community", date:"Jun 28, 2026", title:"Community tip: Elden Ring Fia skip step",   game:"Elden Ring",                    body:"Reader Starscourge_G pointed out a dialogue step we were missing in Fia's questline. The correction has been applied — thanks for keeping us sharp.", tag:"Community" },
  { id:6, type:"new-quest", date:"Jun 25, 2026", title:"8 Cyberpunk Phantom Liberty quests added",  game:"Cyberpunk 2077: Ultimate Edition", body:"The Dogtown questlines are now fully documented, including Reed's loyalty missions and every branch of the Songbird ending path.", tag:"New Content" },
  { id:7, type:"featured",  date:"Jun 22, 2026", title:"Quest of the Week: Ranni's Questline",      game:"Elden Ring",                    body:"The Age of Stars ending remains the most-searched quest on this site. We've rewritten the guide with cleaner step-by-step milestones.", tag:"Featured" },
  { id:8, type:"update",    date:"Jun 20, 2026", title:"Witcher 3 next-gen patch notes applied",    game:"The Witcher 3: Wild Hunt",       body:"The next-gen update added new dialogue to Ciri's ending quests and changed some map marker positions. All affected guides have been updated.", tag:"Updated" },
];

type Tab = "home"|"browse"|"news"|"saved";
type DiffFilter = "All"|"Low"|"Medium"|"High";
type TypeFilter = "All"|"main"|"side";
type LenFilter  = "All"|"short"|"medium"|"long";
// Filters a shortcut can pre-apply when jumping to the Library tab.
type QuestFilters = { game?:string; type?:TypeFilter; diff?:DiffFilter; len?:LenFilter; video?:"All"|"Video Only" };
interface ChatMsg { role:"user"|"assistant"; content:string; }

// ─── Shared helpers ───────────────────────────────────────────────────────────

function Pill({ children, className="" }: { children:React.ReactNode; className?:string }) {
  return <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-sm text-[10px] font-mono font-medium border ${className}`}>{children}</span>;
}
function DiffBadge({ level }: { level:"Low"|"Medium"|"High" }) {
  const s = { Low:"bg-emerald-500/10 text-emerald-400 border-emerald-500/20", Medium:"bg-amber-500/10 text-amber-400 border-amber-500/20", High:"bg-red-500/10 text-red-400 border-red-500/20" };
  const ic = { Low:<Shield size={8}/>, Medium:<Flame size={8}/>, High:<Zap size={8}/> };
  return <Pill className={s[level]}>{ic[level]} {level}</Pill>;
}
function LenDots({ length }: { length:"short"|"medium"|"long" }) {
  const n = { short:1, medium:2, long:3 };
  return <span className="flex items-center gap-0.5">{[0,1,2].map(i=><span key={i} className={`w-1.5 h-1.5 rounded-full ${i<n[length]?"bg-primary":"bg-muted-foreground/25"}`}/>)}</span>;
}

const NEWS_STYLE: Record<string,string> = {
  "new-quest":"text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  update:     "text-amber-400  bg-amber-500/10  border-amber-500/20",
  featured:   "text-primary    bg-primary/10    border-primary/20",
  "new-game": "text-sky-400    bg-sky-500/10    border-sky-500/20",
  community:  "text-purple-400 bg-purple-500/10 border-purple-500/20",
};
const NEWS_ICON: Record<string,React.ReactNode> = {
  "new-quest":<Rss size={11}/>, update:<Bell size={11}/>, featured:<Star size={11}/>,
  "new-game":<Sparkles size={11}/>, community:<Trophy size={11}/>,
};

// ─── QuestCard ────────────────────────────────────────────────────────────────

function QuestCard({ quest, saved, onSave, compact=false }: { quest:Quest; saved:boolean; onSave:(id:number)=>void; compact?:boolean }) {
  const meta = GAMES[quest.game];
  const col  = meta?.accent ?? "#c5933a";
  return (
    <article
      className="group flex bg-card border border-border rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
      onMouseEnter={e=>{const el=e.currentTarget;el.style.borderColor=col+"55";el.style.boxShadow=`0 12px 32px rgba(0,0,0,.5),0 0 0 1px ${col}22,0 4px 20px ${col}15`;}}
      onMouseLeave={e=>{const el=e.currentTarget;el.style.borderColor="";el.style.boxShadow="";}}
    >
      <div className="relative flex-shrink-0 overflow-hidden" style={{ width:"5.5rem" }}>
        {meta?.cover && <img src={meta.cover} alt={quest.game} className="absolute inset-0 w-full h-full object-cover object-top"/>}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/60"/>
        <div className="absolute left-0 top-0 bottom-0 w-0.5" style={{ backgroundColor:col }}/>
      </div>
      <div className="flex-1 min-w-0 p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-1">
          <span className="text-[10px] font-mono font-semibold tracking-wider uppercase truncate" style={{ color:col }}>{quest.game}</span>
          <div className="flex items-center gap-2 shrink-0">
            {quest.video && <span className="flex items-center gap-0.5 text-[9px] text-red-400/60 font-mono"><Youtube size={9}/> Video</span>}
            <button onClick={e=>{e.stopPropagation();onSave(quest.id);}} className="text-muted-foreground/40 hover:text-primary transition-colors">
              {saved ? <BookmarkCheck size={13} className="text-primary"/> : <Bookmark size={13}/>}
            </button>
          </div>
        </div>
        <h3 className="text-sm font-semibold leading-snug text-foreground group-hover:text-primary transition-colors" style={{ fontFamily:"'Cinzel',serif" }}>{quest.title}</h3>
        {!compact && <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-3 flex-1">{quest.summary}</p>}
        <div className="flex items-center gap-1.5 flex-wrap">
          <Pill className={quest.type==="main"?"bg-primary/10 text-primary border-primary/25":"bg-white/5 text-muted-foreground border-white/10"}>
            {quest.type==="main"?<Star size={8}/>:<BookOpen size={8}/>}{quest.type==="main"?"Main":"Side"}
          </Pill>
          <DiffBadge level={quest.difficulty}/>
          <span className="flex items-center gap-1 ml-auto"><Clock size={9} className="text-muted-foreground"/><LenDots length={quest.length}/><span className="text-[9px] text-muted-foreground font-mono capitalize">{quest.length}</span></span>
        </div>
      </div>
    </article>
  );
}

// ─── GameGallery (with arrows) ────────────────────────────────────────────────

function GameGallery({ selectedGame, onSelect }: { selectedGame:string; onSelect:(g:string)=>void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [canL, setCanL] = useState(false);
  const [canR, setCanR] = useState(true);
  const questCount = useMemo(()=>{ const m:Record<string,number>={};QUESTS.forEach(q=>{m[q.game]=(m[q.game]||0)+1;});return m; },[]);
  const check = useCallback(()=>{ const el=ref.current;if(!el)return;setCanL(el.scrollLeft>8);setCanR(el.scrollLeft+el.clientWidth<el.scrollWidth-8); },[]);
  useEffect(()=>{ const el=ref.current;if(!el)return;check();el.addEventListener("scroll",check,{passive:true});window.addEventListener("resize",check);return()=>{el.removeEventListener("scroll",check);window.removeEventListener("resize",check);}; },[check]);
  const scroll=(dir:"left"|"right")=>{ ref.current?.scrollBy({left:dir==="right"?340:-340,behavior:"smooth"}); };
  return (
    <div className="flex items-center gap-2">
      <button onClick={()=>scroll("left")} disabled={!canL} aria-label="Scroll left"
        className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${canL?"border-border bg-secondary text-foreground hover:border-primary/50 hover:text-primary":"border-border/30 bg-secondary/30 text-muted-foreground/30 cursor-default"}`}>
        <ChevronLeft size={15}/>
      </button>
      <div ref={ref} className="flex gap-3 overflow-x-auto flex-1" style={{scrollbarWidth:"none"} as React.CSSProperties}>
        {Object.entries(GAMES).map(([name,meta])=>{
          const sel=selectedGame===name;
          return (
            <button key={name} onClick={()=>onSelect(selectedGame===name?"All":name)} aria-label={name}
              className={`relative flex-shrink-0 rounded-lg overflow-hidden border transition-all duration-200 ${sel?"border-primary scale-105 shadow-xl":"border-border hover:border-white/20 hover:scale-[1.03]"}`}
              style={{width:"7rem",aspectRatio:"2/3"}}>
              <img src={meta.cover} alt={name} className="absolute inset-0 w-full h-full object-cover"/>
              <div className="absolute inset-0" style={{background:"linear-gradient(to top,rgba(0,0,0,.92) 40%,rgba(0,0,0,.15))"}}/>
              {sel&&<div className="absolute inset-0 opacity-25" style={{background:meta.gradient}}/>}
              {sel&&<div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full" style={{backgroundColor:meta.accent}}/>}
              <div className="absolute bottom-0 inset-x-0 p-2 text-left">
                <div className="text-[9px] font-mono font-bold tracking-widest uppercase" style={{color:sel?meta.accent:"#9ca3af"}}>{meta.abbr}</div>
                <div className="text-[8px] text-white/50 font-mono">{questCount[name]||0} quests</div>
              </div>
            </button>
          );
        })}
      </div>
      <button onClick={()=>scroll("right")} disabled={!canR} aria-label="Scroll right"
        className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${canR?"border-border bg-secondary text-foreground hover:border-primary/50 hover:text-primary":"border-border/30 bg-secondary/30 text-muted-foreground/30 cursor-default"}`}>
        <ChevronRight size={15}/>
      </button>
    </div>
  );
}

// ─── Home Tab ─────────────────────────────────────────────────────────────────

function HomeTab({ onGoTo, savedIds, onSave }: { onGoTo:(tab:Tab,filters?:QuestFilters)=>void; savedIds:Set<number>; onSave:(id:number)=>void }) {
  const questOfWeek = QUESTS.find(q=>q.id===11)!; // The Bloody Baron
  const recentQuests = QUESTS.slice(0, 6);
  const latestNews = NEWS.slice(0, 3);

  return (
    <div className="flex flex-col">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{minHeight:420}}>
        {/* Cycling background: stack of 3 covers */}
        <div className="absolute inset-0">
          {["Elden Ring","Baldur's Gate 3","God of War Ragnarök"].map((g,i)=>(
            <div key={g} className="absolute inset-0" style={{
              backgroundImage:`url('${GAMES[g].cover}')`,
              backgroundSize:"cover", backgroundPosition:"center",
              opacity: i===0?0.18:i===1?0.10:0.08,
              transform:`scale(${1+i*0.05})`,
            }}/>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background"/>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40"/>

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-primary text-[10px] font-mono tracking-widest uppercase">
            <Star size={9}/> Fan-made RPG Quest Database
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] max-w-2xl" style={{fontFamily:"'Cinzel',serif"}}>
            Every Quest.<br/>
            <span className="text-primary">Every Path.</span><br/>
            One Guide.
          </h1>

          <p className="text-muted-foreground text-base max-w-lg leading-relaxed">
            Browse, filter, and master side quests and walkthroughs across {Object.keys(GAMES).length} RPGs. Over {QUESTS.length}+ quests documented with AI tips, video links, and difficulty ratings.
          </p>

          {/* CTA buttons */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={()=>onGoTo("browse")}
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/85 transition-colors"
              style={{fontFamily:"'Cinzel',serif"}}
            >
              <Library size={15}/> Browse Library
            </button>
            <button
              onClick={()=>onGoTo("news")}
              className="flex items-center gap-2 px-5 py-2.5 bg-secondary border border-border text-foreground rounded-lg font-medium text-sm hover:border-white/20 transition-colors"
            >
              <Newspaper size={15}/> Latest Updates
            </button>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-8 flex-wrap pt-2 border-t border-border/50">
            {[
              { label:"Quests",          value:QUESTS.length+"+"},
              { label:"Games",           value:Object.keys(GAMES).length },
              { label:"With Video",      value:QUESTS.filter(q=>q.video).length },
              { label:"High Difficulty", value:QUESTS.filter(q=>q.difficulty==="High").length },
            ].map(({label,value})=>(
              <div key={label} className="flex flex-col">
                <span className="text-2xl font-bold text-primary" style={{fontFamily:"'Cinzel',serif"}}>{value}</span>
                <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-12 py-10">

        {/* ── Quest of the Week ── */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Star size={14} className="text-primary"/>
              <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">Quest of the Week</span>
            </div>
            <button onClick={()=>onGoTo("browse")} className="text-[10px] font-mono text-primary hover:underline flex items-center gap-1">View all <ArrowRight size={9}/></button>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-border bg-card min-h-52">
            {/* Cover art on right side */}
            <img
              src={GAMES[questOfWeek.game].cover}
              alt={questOfWeek.game}
              className="absolute right-0 top-0 bottom-0 h-full object-cover"
              style={{width:"40%", maskImage:"linear-gradient(to left,rgba(0,0,0,.7) 0%,transparent 100%)", WebkitMaskImage:"linear-gradient(to left,rgba(0,0,0,.7) 0%,transparent 100%)"}}
            />
            <div className="absolute inset-0" style={{background:"linear-gradient(to right,#0e0e16 50%,transparent 100%)"}}/>

            <div className="relative p-7 flex flex-col gap-3 max-w-lg">
              <div className="flex items-center gap-2">
                <Pill className="text-primary bg-primary/10 border-primary/20"><Star size={9}/> Featured Quest</Pill>
                <span className="text-[9px] text-muted-foreground font-mono" style={{color:GAMES[questOfWeek.game].accent}}>{questOfWeek.game}</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground" style={{fontFamily:"'Cinzel',serif"}}>{questOfWeek.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{questOfWeek.summary}</p>
              {questOfWeek.reward && (
                <p className="text-xs text-muted-foreground"><span className="text-foreground font-medium">Reward:</span> {questOfWeek.reward}</p>
              )}
              <div className="flex items-center gap-2 mt-1">
                <DiffBadge level={questOfWeek.difficulty}/>
                <Pill className="bg-white/5 text-muted-foreground border-white/10"><BookOpen size={8}/> Side</Pill>
                <LenDots length={questOfWeek.length}/>
                <span className="text-[9px] text-muted-foreground font-mono capitalize">{questOfWeek.length}</span>
                {questOfWeek.video && (
                  <span className="flex items-center gap-1 text-[9px] text-red-400/70 font-mono ml-2"><Youtube size={9}/> Video available</span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Latest News ── */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Newspaper size={14} className="text-primary"/>
              <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">Latest Updates</span>
            </div>
            <button onClick={()=>onGoTo("news")} className="text-[10px] font-mono text-primary hover:underline flex items-center gap-1">See all <ArrowRight size={9}/></button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {latestNews.map(item=>{
              const gm = item.game?GAMES[item.game]:null;
              return (
                <div key={item.id} className="group flex flex-col bg-card border border-border rounded-lg overflow-hidden hover:border-white/12 transition-all duration-200 cursor-pointer">
                  {gm && (
                    <div className="relative h-24 overflow-hidden bg-muted">
                      <img src={gm.cover} alt={item.game} className="w-full h-full object-cover object-top"/>
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"/>
                      <div className="absolute bottom-2 left-3">
                        <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm text-[9px] font-mono font-medium border ${NEWS_STYLE[item.type]}`}>
                          {NEWS_ICON[item.type]} {item.tag}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="p-4 flex flex-col gap-1.5 flex-1">
                    {!gm && (
                      <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm text-[9px] font-mono font-medium border w-fit ${NEWS_STYLE[item.type]}`}>
                        {NEWS_ICON[item.type]} {item.tag}
                      </span>
                    )}
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug" style={{fontFamily:"'Cinzel',serif"}}>{item.title}</h3>
                    <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2 flex-1">{item.body}</p>
                    <span className="text-[9px] text-muted-foreground/60 font-mono flex items-center gap-1 mt-1"><Calendar size={8}/>{item.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Games in the Database ── */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Grid3X3 size={14} className="text-primary"/>
              <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">Games in the Database</span>
            </div>
            <button onClick={()=>onGoTo("browse")} className="text-[10px] font-mono text-primary hover:underline flex items-center gap-1">Browse library <ArrowRight size={9}/></button>
          </div>

          <div className="grid gap-3" style={{gridTemplateColumns:"repeat(auto-fill,minmax(7rem,1fr))"}}>
            {Object.entries(GAMES).map(([name,meta])=>{
              const count = QUESTS.filter(q=>q.game===name).length;
              return (
                <button
                  key={name}
                  onClick={()=>onGoTo("browse",{game:name})}
                  className="group relative rounded-lg overflow-hidden border border-border hover:border-white/25 hover:scale-[1.04] transition-all duration-200 shadow-sm"
                  style={{aspectRatio:"2/3"}}
                  aria-label={name}
                >
                  <img src={meta.cover} alt={name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                  <div className="absolute inset-0" style={{background:"linear-gradient(to top,rgba(0,0,0,.9) 35%,rgba(0,0,0,.2) 100%)"}}/>
                  <div className="absolute bottom-0 inset-x-0 p-2.5">
                    <div className="text-[9px] font-mono font-bold tracking-widest uppercase group-hover:text-white transition-colors" style={{color:meta.accent}}>{meta.abbr}</div>
                    <div className="text-[8px] text-white/50 font-mono">{count} quest{count!==1?"s":""}</div>
                  </div>
                  {/* Hover accent glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{boxShadow:`inset 0 0 0 1px ${meta.accent}33`}}/>
                </button>
              );
            })}
          </div>
        </section>

        {/* ── Featured Quests ── */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp size={14} className="text-primary"/>
              <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">Featured Quests</span>
            </div>
            <button onClick={()=>onGoTo("browse")} className="text-[10px] font-mono text-primary hover:underline flex items-center gap-1">All quests <ArrowRight size={9}/></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {recentQuests.map(q=><QuestCard key={q.id} quest={q} saved={savedIds.has(q.id)} onSave={onSave}/>)}
          </div>
        </section>

        {/* ── Quick shortcuts ── */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label:"High Difficulty",  icon:<Zap size={14}/>,      color:"text-red-400",    cb:()=>onGoTo("browse",{diff:"High"}) },
            { label:"With Video",       icon:<Youtube size={14}/>,   color:"text-red-400",    cb:()=>onGoTo("browse",{video:"Video Only"}) },
            { label:"Short Quests",     icon:<Clock size={14}/>,     color:"text-emerald-400",cb:()=>onGoTo("browse",{len:"short"}) },
            { label:"Main Quests Only", icon:<Star size={14}/>,      color:"text-primary",    cb:()=>onGoTo("browse",{type:"main"}) },
          ].map(s=>(
            <button key={s.label} onClick={s.cb}
              className="flex items-center gap-2.5 p-4 bg-card border border-border rounded-lg hover:border-white/15 hover:bg-secondary transition-all duration-150 text-left group">
              <span className={s.color}>{s.icon}</span>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">{s.label}</span>
              <ArrowRight size={11} className="ml-auto text-muted-foreground/30 group-hover:text-primary transition-colors"/>
            </button>
          ))}
        </section>

      </div>
    </div>
  );
}

// ─── News Tab ─────────────────────────────────────────────────────────────────

function NewsTab() {
  const featured = NEWS.find(n=>n.type==="featured");
  const rest     = NEWS.filter(n=>n.type!=="featured");
  return (
    <div className="flex flex-col gap-8">
      {featured && (
        <div className="relative rounded-xl overflow-hidden border border-primary/20 bg-card">
          {featured.game&&GAMES[featured.game]&&<>
            <img src={GAMES[featured.game].cover} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10"/>
            <div className="absolute inset-0 bg-gradient-to-r from-card via-card/90 to-transparent"/>
          </>}
          <div className="relative p-6 flex flex-col gap-3 md:max-w-xl">
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-sm text-[10px] font-mono font-medium border ${NEWS_STYLE[featured.type]}`}>{NEWS_ICON[featured.type]} {featured.tag}</span>
              <span className="text-[10px] text-muted-foreground font-mono flex items-center gap-1"><Calendar size={9}/> {featured.date}</span>
            </div>
            <h2 className="text-xl font-bold text-foreground leading-snug" style={{fontFamily:"'Cinzel',serif"}}>{featured.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{featured.body}</p>
            {featured.game&&<span className="text-xs font-mono" style={{color:GAMES[featured.game]?.accent}}>{featured.game}</span>}
          </div>
        </div>
      )}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Filter:</span>
        {["All","New Content","Updated","New Game","Featured","Community"].map(f=>(
          <button key={f} className="px-2.5 py-1 rounded text-xs border border-border text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors">{f}</button>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {rest.map(item=>{
          const gm=item.game?GAMES[item.game]:null;
          return (
            <div key={item.id} className="group flex gap-4 bg-card border border-border rounded-lg p-4 hover:border-white/12 transition-all duration-200 cursor-pointer">
              <div className="flex-shrink-0 w-12 h-16 rounded overflow-hidden bg-muted">
                {gm?<img src={gm.cover} alt={item.game} className="w-full h-full object-cover"/>:<div className="w-full h-full flex items-center justify-center"><Newspaper size={16} className="text-muted-foreground/40"/></div>}
              </div>
              <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm text-[9px] font-mono font-medium border ${NEWS_STYLE[item.type]}`}>{NEWS_ICON[item.type]} {item.tag}</span>
                  {gm&&<span className="text-[9px] font-mono truncate" style={{color:gm.accent}}>{item.game}</span>}
                  <span className="text-[9px] text-muted-foreground font-mono ml-auto flex items-center gap-1 shrink-0"><Calendar size={8}/> {item.date}</span>
                </div>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors" style={{fontFamily:"'Cinzel',serif"}}>{item.title}</h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">{item.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Saved Tab ────────────────────────────────────────────────────────────────

function SavedTab({ savedIds, onSave }: { savedIds:Set<number>; onSave:(id:number)=>void }) {
  const saved = QUESTS.filter(q=>savedIds.has(q.id));
  if (!saved.length) return (
    <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
      <Bookmark size={32} className="text-muted-foreground/20"/>
      <p className="text-muted-foreground text-sm">No saved quests yet.</p>
      <p className="text-xs text-muted-foreground/60">Click the bookmark icon on any quest card to save it here.</p>
    </div>
  );
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground font-mono">{saved.length} saved quest{saved.length!==1?"s":""}</span>
        <button onClick={()=>saved.forEach(q=>onSave(q.id))} className="text-xs text-muted-foreground hover:text-primary font-mono transition-colors">Clear all</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {saved.map(q=><QuestCard key={q.id} quest={q} saved onSave={onSave}/>)}
      </div>
    </div>
  );
}

// ─── Chat Widget ──────────────────────────────────────────────────────────────

function ChatWidget() {
  const [open,setOpen]=useState(false);
  const [input,setInput]=useState("");
  const [msgs,setMsgs]=useState<ChatMsg[]>([{role:"assistant",content:"Greetings, adventurer. Ask me anything about quests, strategies, or walkthroughs."}]);
  const bottomRef=useRef<HTMLDivElement>(null);
  useEffect(()=>{if(open)bottomRef.current?.scrollIntoView({behavior:"smooth"});},[msgs,open]);
  const REPLIES=["Make sure you talk to every NPC before triggering the next objective — many quests have easy-to-miss setup steps.","For that difficulty level, I'd recommend upgrading your gear first.","That quest has multiple endings — your dialogue choices determine the outcome.","Save before that conversation. The choice locks you into a specific branch.","Check the video walkthrough — the route isn't obvious from the map alone."];
  const send=()=>{ if(!input.trim())return; setMsgs(p=>[...p,{role:"user",content:input},{role:"assistant",content:REPLIES[Math.floor(Math.random()*REPLIES.length)]}]); setInput(""); };
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open&&(
        <div className="w-80 rounded-xl border border-border bg-card flex flex-col overflow-hidden" style={{maxHeight:440,boxShadow:"0 0 0 1px rgba(197,147,58,.15),0 24px 48px rgba(0,0,0,.75)"}}>
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary">
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary animate-pulse"/><span className="text-sm font-semibold" style={{fontFamily:"'Cinzel',serif"}}>Quest Assistant</span></div>
            <button onClick={()=>setOpen(false)} className="text-muted-foreground hover:text-foreground"><X size={16}/></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3" style={{scrollbarWidth:"none"}}>
            {msgs.map((m,i)=>(
              <div key={i} className={`flex ${m.role==="user"?"justify-end":"justify-start"}`}>
                <div className={`max-w-[85%] rounded-lg px-3 py-2 text-xs leading-relaxed ${m.role==="user"?"bg-primary text-primary-foreground":"bg-muted text-foreground border border-border"}`}>{m.content}</div>
              </div>
            ))}
            <div ref={bottomRef}/>
          </div>
          <div className="border-t border-border p-3 flex gap-2">
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Ask about a quest…" className="flex-1 bg-secondary border border-border rounded-lg px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors"/>
            <button onClick={send} className="bg-primary hover:bg-primary/80 text-primary-foreground rounded-lg px-3 py-2 transition-colors"><Send size={14}/></button>
          </div>
        </div>
      )}
      <button onClick={()=>setOpen(!open)} className="w-12 h-12 rounded-full bg-primary hover:bg-primary/80 text-primary-foreground flex items-center justify-center transition-all duration-200 hover:scale-105" style={{boxShadow:"0 0 20px rgba(197,147,58,.35)"}}>
        {open?<X size={20}/>:<MessageCircle size={20}/>}
      </button>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [tab,         setTab]         = useState<Tab>(LIVE_TABS[0] ?? "home");
  const [selectedGame,setSelectedGame]= useState("All");
  const [typeFilter,  setTypeFilter]  = useState<TypeFilter>("All");
  const [diffFilter,  setDiffFilter]  = useState<DiffFilter>("All");
  const [lenFilter,   setLenFilter]   = useState<LenFilter>("All");
  const [videoFilter, setVideoFilter] = useState<"All"|"Video Only">("All");
  const [search,      setSearch]      = useState("");
  const [savedIds,    setSavedIds]    = useState<Set<number>>(new Set());

  const toggleSave=(id:number)=>setSavedIds(prev=>{ const n=new Set(prev); n.has(id)?n.delete(id):n.add(id); return n; });

  // Switching tabs (e.g. a Home shortcut jumping to the Library) should start
  // at the top, not wherever the previous tab was scrolled to.
  useEffect(()=>{ window.scrollTo(0,0); },[tab]);

  // In prod only promoted tabs are reachable; a shortcut to an un-promoted tab
  // is a no-op there. In staging every tab is live.
  // Navigate to a tab, optionally pre-applying a filter set. When filters are
  // given every filter is reset first so the Library shows exactly that view.
  const goTo=(t:Tab,f?:QuestFilters)=>{
    if(!isTabLive(t))return;
    setTab(t);
    if(f){
      setSelectedGame(f.game ?? "All");
      setTypeFilter(f.type ?? "All");
      setDiffFilter(f.diff ?? "All");
      setLenFilter(f.len ?? "All");
      setVideoFilter(f.video ?? "All");
      setSearch("");
    }
  };

  const filtered = useMemo(()=>QUESTS.filter(q=>{
    if(selectedGame!=="All"&&q.game!==selectedGame)return false;
    if(typeFilter!=="All"&&q.type!==typeFilter)return false;
    if(diffFilter!=="All"&&q.difficulty!==diffFilter)return false;
    if(lenFilter!=="All"&&q.length!==lenFilter)return false;
    if(videoFilter==="Video Only"&&!q.video)return false;
    if(search){const s=search.toLowerCase();if(!q.title.toLowerCase().includes(s)&&!q.game.toLowerCase().includes(s)&&!q.summary.toLowerCase().includes(s))return false;}
    return true;
  }),[selectedGame,typeFilter,diffFilter,lenFilter,videoFilter,search]);

  const activeFilters=[selectedGame!=="All",typeFilter!=="All",diffFilter!=="All",lenFilter!=="All",videoFilter!=="All",!!search].filter(Boolean).length;

  const selectedMeta=selectedGame!=="All"?GAMES[selectedGame]:null;

  const pills=<T extends string>(opts:T[],cur:T,set:(v:T)=>void)=>opts.map(o=>(
    <button key={o} onClick={()=>set(o)} className={`px-2.5 py-1 rounded text-xs border transition-all duration-150 ${cur===o?"bg-primary/15 text-primary border-primary/30 font-medium":"text-muted-foreground border-border hover:text-foreground hover:border-white/15"}`}>{o}</button>
  ));

  const TABS=[
    {id:"home"  as Tab, icon:<Home size={13}/>,      label:"Home"   },
    {id:"browse"as Tab, icon:<Library size={13}/>,   label:"Library"},
    {id:"news"  as Tab, icon:<Newspaper size={13}/>, label:"News"   },
    {id:"saved" as Tab, icon:<Bookmark size={13}/>,  label:"Saved", badge:savedIds.size||undefined},
  ].filter(t=>isTabLive(t.id));

  // Prod build with nothing promoted yet: show a neutral placeholder rather
  // than a tab the user hasn't approved. (Staging always has live tabs.)
  if(TABS.length===0){
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 text-center" style={{fontFamily:"'Outfit',sans-serif"}}>
        <div className="max-w-sm">
          <div className="w-10 h-10 rounded border border-primary/40 bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Swords size={18} className="text-primary"/>
          </div>
          <h1 className="text-lg font-semibold mb-1" style={{fontFamily:"'Cinzel',serif"}}>RPG Quest Guide</h1>
          <p className="text-sm text-muted-foreground">The redesign is being rolled out section by section. No sections have gone live here yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground" style={{fontFamily:"'Outfit',sans-serif"}}>

      {/* ── Header ── */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
          <button onClick={()=>TABS[0]&&setTab(TABS[0].id)} className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <div className="w-7 h-7 rounded border border-primary/40 bg-primary/10 flex items-center justify-center">
              <Swords size={14} className="text-primary"/>
            </div>
            <span className="text-base font-semibold hidden sm:block" style={{fontFamily:"'Cinzel',serif"}}>RPG Quest Guide</span>
            {IS_STAGING && (
              <span className="ml-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wide bg-amber-500/15 text-amber-400 border border-amber-500/30">Staging</span>
            )}
          </button>

          <nav className="flex items-center gap-1 bg-secondary/60 rounded-lg p-1 border border-border">
            {TABS.map(t=>(
              <button key={t.id} onClick={()=>setTab(t.id)}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-150 ${tab===t.id?"bg-primary text-primary-foreground shadow":"text-muted-foreground hover:text-foreground"}`}>
                {t.icon} <span className="hidden sm:inline">{t.label}</span>
                {t.badge!==undefined&&(
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[9px] font-bold flex items-center justify-center border-2 border-background">
                    {t.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          <span className="text-xs text-muted-foreground font-mono hidden md:block">{QUESTS.length} quests · {Object.keys(GAMES).length} games</span>
        </div>
      </header>

      {/* ── Compact banner for non-home tabs ── */}
      {tab!=="home" && (
        <div className="border-b border-border bg-secondary/20">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
            <div>
              <h2 className="text-lg font-bold text-foreground" style={{fontFamily:"'Cinzel',serif"}}>
                {tab==="browse" ? (selectedGame!=="All" ? <><span style={{color:selectedMeta?.accent}}>{selectedGame}</span> — Quest Library</> : "Quest Library")
                 : tab==="news" ? "Latest Updates"
                 : "Saved Quests"}
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                {tab==="browse" ? `${filtered.length} quests${selectedGame!=="All"?` in ${selectedGame}`:""}` :
                 tab==="news"   ? `${NEWS.length} updates` :
                 `${savedIds.size} saved`}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── Home tab (full page, no extra padding wrapper) ── */}
      {tab==="home" && <HomeTab onGoTo={goTo} savedIds={savedIds} onSave={toggleSave}/>}

      {/* ── Other tabs ── */}
      {tab!=="home" && (
        <>
          {/* Game gallery + filters — browse only */}
          {tab==="browse" && (
            <>
              <div className="border-b border-border bg-secondary/10">
                <div className="max-w-7xl mx-auto px-6 py-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">Browse by Game</span>
                    {selectedGame!=="All"&&<button onClick={()=>setSelectedGame("All")} className="text-[10px] text-primary hover:underline font-mono">↺ Show all</button>}
                    <span className="hidden md:flex items-center gap-1 ml-auto text-[9px] text-muted-foreground/50 font-mono">
                      <ChevronLeft size={9}/> scroll <ChevronRight size={9}/>
                    </span>
                  </div>
                  <GameGallery selectedGame={selectedGame} onSelect={setSelectedGame}/>
                </div>
              </div>

              <div className="border-b border-border bg-background/60 backdrop-blur-sm sticky top-14 z-30">
                <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap gap-4 items-center">
                  <div className="flex flex-col gap-1"><span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">Type</span><div className="flex gap-1.5">{pills(["All","main","side"] as TypeFilter[],typeFilter,setTypeFilter)}</div></div>
                  <div className="w-px h-8 bg-border hidden sm:block"/>
                  <div className="flex flex-col gap-1"><span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">Difficulty</span><div className="flex gap-1.5">{pills(["All","Low","Medium","High"] as DiffFilter[],diffFilter,setDiffFilter)}</div></div>
                  <div className="w-px h-8 bg-border hidden sm:block"/>
                  <div className="flex flex-col gap-1"><span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">Length</span><div className="flex gap-1.5">{pills(["All","short","medium","long"] as LenFilter[],lenFilter,setLenFilter)}</div></div>
                  <div className="w-px h-8 bg-border hidden sm:block"/>
                  <div className="flex flex-col gap-1"><span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">Walkthrough</span><div className="flex gap-1.5">{pills(["All","Video Only"],videoFilter,setVideoFilter)}</div></div>
                  <button onClick={()=>{setSelectedGame("All");setTypeFilter("All");setDiffFilter("All");setLenFilter("All");setVideoFilter("All");setSearch("");}} className="ml-auto text-[10px] font-mono text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                    ↺ Reset{activeFilters>0&&<span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-primary text-primary-foreground text-[9px] font-bold ml-1">{activeFilters}</span>}
                  </button>
                </div>
              </div>
            </>
          )}

          <main className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6">
            {tab==="browse" && (
              <>
                <div className="flex items-center gap-3">
                  <div className="relative flex-1 max-w-md">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"/>
                    <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search quests, games, descriptions…" className="w-full bg-secondary border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors"/>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">{filtered.length} result{filtered.length!==1?"s":""}</span>
                </div>
                {filtered.length===0
                  ? <div className="flex flex-col items-center justify-center py-24 gap-4 text-center"><Swords size={32} className="text-muted-foreground/25"/><p className="text-muted-foreground text-sm">No quests match your filters.</p><button onClick={()=>{setSelectedGame("All");setTypeFilter("All");setDiffFilter("All");setLenFilter("All");setVideoFilter("All");setSearch("");}} className="text-xs text-primary hover:underline">Reset filters</button></div>
                  : <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">{filtered.map(q=><QuestCard key={q.id} quest={q} saved={savedIds.has(q.id)} onSave={toggleSave}/>)}</div>
                }
              </>
            )}
            {tab==="news"  && <NewsTab/>}
            {tab==="saved" && <SavedTab savedIds={savedIds} onSave={toggleSave}/>}
          </main>
        </>
      )}

      {/* ── Footer ── */}
      <footer className="border-t border-border mt-8">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2"><Swords size={13} className="text-primary"/><span className="text-sm font-semibold" style={{fontFamily:"'Cinzel',serif"}}>RPG Quest Guide</span></div>
          <div className="flex flex-col sm:items-end gap-1">
            <a href="mailto:k.barbu12@gmail.com" className="text-xs text-muted-foreground hover:text-primary transition-colors">k.barbu12@gmail.com</a>
            <p className="text-[10px] text-muted-foreground/50">Fan-made · Not affiliated with any publisher or developer.</p>
          </div>
        </div>
      </footer>

      <ChatWidget/>
    </div>
  );
}
