/* Atelier Tool Capability Engine — offline, course-grounded rules. */
window.ATELIER_DOUBT_CAPABILITIES = (function(){
  'use strict';
  const TOOLS = [
    {id:'pencil',names:['pencil','pencils','pensil','pensila','graphite','hb','2b','4b','6b','h pencil','b pencil','lead pencil'],label:'pencil',
      hiCan:'HB ya 2B pencil se construction lines, confident lines, ellipses, basic shapes, forms aur tonal practice kar sakte ho.',
      can:'Make construction lines, confident lines, ellipses, basic shapes, forms and tonal studies. HB or 2B is enough for the Foundations arc.',
      hiLimit:'Ek akeli HB/2B pencil ki value range poore set se kam hoti hai, par start karne ke liye ye bilkul kaafi hai.',
      limit:'A single HB/2B pencil has a narrower value range than a full set, but it is not a reason to delay learning.'},
    {id:'paper',names:['paper','pepara','copy paper','printer paper','newsprint','notebook','sketchbook','drawing pad','kagaj','kaagaj','kagaz','kaagaz','kagaja'],label:'paper',
      hiCan:'Plain copy paper ya newsprint par line, ellipse, box aur observation drills karo; sketchbook ko dated work ke liye bachao.',
      can:'Practise lines, ellipses, boxes, shapes and observational drawings. Plain copy paper or newsprint is suitable for volume drills; save a sketchbook for dated work.',
      hiLimit:'Bahut patle ya glossy paper par heavy layering aur blending mushkil hoti hai.',
      limit:'Very thin or glossy paper may limit heavy layering and blending.'},
    {id:'ink-pen',names:['fineliner','ink pen','ballpoint','ballpoint pen','gel pen','pen','ink'],label:'pen / fineliner',
      hiCan:'Pen ya fineliner se deliberate line confidence, hatching, contour drawing aur ink-first construction drills kar sakte ho.',
      can:'Build deliberate line confidence, hatching, contour studies and commitment-first construction drills with pen or fineliner.',
      hiLimit:'Ink erase nahi hoti — isliye pencil se light construction ya direct ghosting ke saath slow, intentional strokes lagao.',
      limit:'Ink cannot be erased, so ghost strokes carefully or keep an underdrawing light before inking.'},
    {id:'eraser',names:['eraser','irejara','irejar','rubber','rubara','rabbara','vinyl eraser','plastic eraser','kneaded eraser'],label:'eraser',
      hiCan:'Unwanted marks ko halka lift karo; vinyl/plastic eraser clean erase karta hai, kneaded eraser soft highlights ke kaam aata hai.',
      can:'Lift unwanted marks; a vinyl/plastic eraser gives cleaner removal, while a kneaded eraser can lift graphite gently and create soft highlights.',
      hiLimit:'Pencil ke peeche laga chhota eraser proper vinyl eraser ki jagah nahi le sakta.',
      limit:'A pencil-top eraser is not an ideal substitute for a proper eraser.'},
    {id:'sharpener',names:['sharpener','pencil sharpener'],label:'sharpener',
      hiCan:'Pencil ki point ko useful rakhta hai, jisse controlled lines aur details bana sakte ho.',
      can:'Keep a usable point for controlled lines and details.'},
    {id:'ruler',names:['ruler','rulara','roolara','straight edge','scale','skela'],label:'ruler',
      hiCan:'Measured straight edges aur simple guides check karne ke kaam aata hai.',
      can:'Check straight measured edges and simple perspective/construction guides.',
      hiLimit:'Line drills freehand bhi karo; ruler tumhare liye freehand hand-control nahi bana sakta.',
      limit:'Do some line drills freehand too; a ruler cannot build confident freehand control for you.'},
    {id:'blending',names:['blending stump','blendinga stanpa','blendinga stampa','blaindinga stampa','stump','stampa','tissue','cotton bud','finger blending'],label:'blending aid',
      hiCan:'Jab smooth graphite gradient chahiye tab transitions ko soften kar sakta hai.',
      can:'Soften graphite transitions when a smooth gradient is specifically intended.',
      hiLimit:'Blending optional hai, default nahi. Zyada blending se values muddy ho jaati hain aur paper texture khatam ho jaata hai.',
      limit:'Blending is optional, not a default. Over-blending can make values muddy and remove useful texture.'},
    {id:'charcoal',names:['charcoal','charcoal pencil'],label:'charcoal',
      hiCan:'Deep dark marks, bold silhouettes aur expressive tonal studies practice karne ke liye badhiya hai.',
      can:'Explore broader, expressive dark marks and tonal studies.',
      hiLimit:'Shuruati Foundations modules ke liye charcoal zaroori nahi; pehle graphite control seekho.',
      limit:'Charcoal is not required for the early Foundations modules; learn graphite control first.'},
    {id:'colored-pencil',names:['colored pencil','colour pencil','colour pencils','colored pencils'],label:'colored pencils',
      hiCan:'Colour studies aur warm/cool colour relationships practice kar sakte ho.',
      can:'Make coloured studies and practise colour relationships.',
      hiLimit:'Shuruati drawing fundamentals ke liye colour pencils ki zaroorat nahi hoti.',
      limit:'They are not required for the first drawing fundamentals.'},
    {id:'tablet',names:['drawing tablet','droinga taibaleta','graphics tablet','pen tablet','ipad','tablet','taibaleta'],label:'drawing tablet',
      hiCan:'Compatible device aur software ke saath digital drawing; pressure sensitivity line width aur opacity control kar sakti hai.',
      can:'Work digitally when paired with a compatible device/software; pressure sensitivity can control line width and opacity.',
      hiLimit:'Course mein digital fundamentals traditional construction ke baad aate hain. Drawing shuru karne ke liye tablet zaroori nahi.',
      limit:'The course places digital fundamentals after traditional construction. A tablet is not needed to begin drawing.'},
    {id:'stylus',names:['stylus','stailasa','digital pen','apple pencil','s pen'],label:'stylus',
      hiCan:'Compatible touchscreen/tablet par draw karne ke kaam aata hai; pressure aur tilt device/app support par depend karte hain.',
      can:'Draw on a compatible touchscreen/tablet; pressure and tilt depend on device and app support.',
      hiLimit:'Simple capacitive stylus mein pressure sensitivity nahi hoti.',
      limit:'A basic stylus may not provide pressure sensitivity.'},
    {id:'phone',names:['phone','mobile','smartphone','android phone'],label:'phone',
      hiCan:'Reference dekhne, photo lene ya compatible app mein basic sketching ke liye use kar sakte ho.',
      can:'Use as a reference viewer, camera, or basic sketching device with a compatible drawing app.',
      hiLimit:'Sirf phone pressure-sensitive tablet ki jagah nahi le sakta; chhoti screen aur touch precision limit karte hain.',
      limit:'A phone alone does not replace a pressure-sensitive tablet; screen size and touch input can constrain precision.'},
    {id:'laptop',names:['laptop','computer','pc'],label:'computer',
      hiCan:'Digital art software aur files handle kar sakta hai; pen pressure ke liye compatible tablet/stylus chahiye.',
      can:'Run digital art software and manage files; input quality depends on the connected mouse, pen tablet or touchscreen.',
      hiLimit:'Computer apne aap pen pressure sensitivity nahi deta.',
      limit:'A computer does not itself provide pen pressure sensitivity.'},
    {id:'krita',names:['krita'],label:'Krita',
      hiCan:'Free digital painting workflow ke liye canvas, brush, layers aur colour picker use kar sakte ho.',
      can:'Use a free digital painting workflow with canvas, brush, layers and colour picker.',
      hiLimit:'Pehli drawing banane se pehle har feature seekhne ki zaroorat nahi.',
      limit:'You do not need to master every feature before making your first drawing.'},
    {id:'photoshop',names:['photoshop'],label:'Photoshop',
      hiCan:'Layers, brushes, selections, transform aur compositing tools se digital artwork bana sakte ho.',
      can:'Use layers, brushes, selections, transforms and compositing tools for digital artwork.',
      hiLimit:'Photoshop compulsory nahi hai; core digital concepts har app mein kaam aate hain.',
      limit:'It is not required; the underlying digital-art concepts transfer to other apps.'},
    {id:'procreate',names:['procreate'],label:'Procreate',
      hiCan:'Supported iPad par brushes, layers aur selection tools se draw aur paint kar sakte ho.',
      can:'Draw and paint on a supported iPad using brushes, layers and selection tools.',
      hiLimit:'Ye optional aur sirf iPad ke liye hai.',
      limit:'It is optional and platform-specific.'},
    {id:'clip-studio',names:['clip studio','clip studio paint'],label:'Clip Studio Paint',
      hiCan:'Brushes, layers aur comic tools se digital illustrations aur comics bana sakte ho.',
      can:'Create digital illustrations and comics using brushes, layers and comic-oriented tools.',
      hiLimit:'Ye optional hai; fundamentals kisi bhi software mein same rehte hain.',
      limit:'It is optional; fundamentals transfer across software.'},
    {id:'brush',names:['round brush','soft brush','hard brush','brush','brushes'],label:'brush(es)',
      hiCan:'Hard round brush crisp edges aur soft round brush soft transitions ke liye useful hai.',
      can:'Make digital marks; a hard round brush is useful for crisp edges and a soft round brush for softer transitions.',
      hiLimit:'Shuruat mein bade brush packs ki zaroorat nahi; pehle opacity, flow aur hardness samjho.',
      limit:'A large brush pack is unnecessary at the beginning; learn opacity, flow and hardness first.'},
    {id:'layers',names:['layer','layers'],label:'layers',
      hiCan:'Sketch, line aur colour ko alag rakho taaki har part independently edit ho sake.',
      can:'Separate sketch, line and colour so each can be edited independently; Multiply can help with shadows and Screen with highlights.',
      hiLimit:'Working file hamesha layered rakho; flatten sirf export copy banate waqt karo.',
      limit:'Keep a layered working file; flatten only when exporting a copy.'},
    {id:'lasso-selection',names:['lasso','lasso tool','selection tool','marching ants'],label:'lasso & selection',
      hiCan:'Lasso selection se bade soft brush ke saath bhi razor-sharp silhouette edges aur clean shape fills bana sakte ho.',
      can:'Use the lasso and selection tools to isolate silhouettes and paint razor-sharp edges even with a large soft brush.',
      hiLimit:'Edges par focus rakhne ke liye painting ke waqt marching ants ko Ctrl+H se temporarily hide kar sakte ho.',
      limit:'Hide marching ants (Ctrl+H) while painting inside a selection so you can judge edge transitions cleanly.'},
    {id:'clipping-mask',names:['clipping mask','alpha lock','layer mask'],label:'masks & alpha lock',
      hiCan:'Alpha Lock aur Clipping Mask se base silhouette ke bahar color leak kiye bina shading aur texture paint kar sakte ho.',
      can:'Use Alpha Lock, Clipping Masks, and Layer Masks to shade and texture cleanly inside a silhouette non-destructively.',
      hiLimit:'Layer mask non-destructive rehta hai (black hide, white reveal), jabki erase seedha pixels delete karta hai.',
      limit:'Prefer Layer Masks (black hides, white reveals) over erasing so edits stay reversible.'},
    {id:'blender-3d',names:['blender','3d model','3d blockout','sketchfab'],label:'3D blockout (Blender)',
      hiCan:'Blender mein simple cubes aur planes se camera angle aur perspective blockout set karke upar 2D overpaint kar sakte ho.',
      can:'Block out basic cubes and camera angles in Blender to lock perspective and lighting before painting over in 2D.',
      hiLimit:'Complex 3D modeling ki zaroorat nahi — sirf 5–10 primitives se scene layout test karo.',
      limit:'You do not need complex 3D modeling; 5–10 simple primitives are enough for perspective and light blockouts.'},
    {id:'color-picker',names:['color picker','colour picker','eyedropper'],label:'colour picker',
      hiCan:'Canvas ya reference se exact colour sample kar sakte ho.',
      can:'Sample colours directly from the canvas or a reference.'}
  ];
  function norm(s){return String(s||'').toLowerCase().replace(/[^a-z0-9.+# -]/g,' ').replace(/\s+/g,' ').trim();}
  function escRe(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}
  function hasTerm(q,term){return new RegExp('(?:^|\\b)'+escRe(term)+'(?:$|\\b)').test(q);}
  function hasAny(q,arr){return arr.some(x=>hasTerm(q,x));}
  function hasSubAny(q,arr){return arr.some(x=>q.includes(x));}
  function cleanHtml(s){return String(s||'').replace(/<[^>]*>/g,'').replace(/&amp;/g,'&').replace(/&quot;/g,'"');}
  function answer(query,findModule,getTitle,uiLanguage){
    const q=norm(typeof window.normalizeDoubtText==='function'?window.normalizeDoubtText(query):query); if(!q) return null;
    const hi=uiLanguage==='hi'||/[\u0900-\u097f]/.test(String(query))||['hai','hain','kya','kyaa','kaise','mujhe','mera','meri','mere','bata','bta','karu','karo','chahiye','nahi','nhi','sakta','sakti','shuru','zaroori','hota','hoti','hoon','hun','kyu','kyun','banau','banao'].some(w=>(' '+q+' ').includes(' '+w+' '));
    const moduleMatch=q.match(/\b(?:module|mod|maudyool|maudyula|maudyoola|modyool|modyoola)\s*(\d{1,3})\b|\bm\s*(\d{1,3})\b/);
    const moduleNumber=moduleMatch ? Number(moduleMatch[1]||moduleMatch[2]) : null;
    const matchedTools = TOOLS.filter(t=>t.names.some(n=>hasTerm(q,n)));
    const asksNeed=hasAny(q,['need','needed','necessary','require','required','must','should i buy','buy','zaroori','jaruri','jaroori','jarooree','chahiye','chahie','chaahie','compulsory']) || hasSubAny(q,['kya lena','kya kharid']);
    const asksCan=hasSubAny(q,['what can i do','what can these','kyaa kar','kyaa bana','can i start','can i draw','can i make','kya kar','kya bana','isse kya','in se kya','shuru','shurua','start with']) || hasAny(q,['enough','sufficient']);
    const asksWithout=hasAny(q,['without','bina','binaa','bagair']) || hasSubAny(q,['nahi hai','nhi hai']);
    const asksShade=hasAny(q,['shading','shade','shed','shedinga','sheedinga','tonal','value','shadow']);
    const asksDigital=hasAny(q,['digital','tablet','stylus','krita','photoshop','procreate','clip studio','layers','brush']);
    const explicitSupplyPhrase=hasSubAny(q,['tool','tools','auzaar','aujaar','samaan','saaman','supply','supplies','material','materials','equipment','gear','drawing app','art kit','tools needed','tools required','mere paas','mere pass','i have','i only have']);
    const toolIntent=(matchedTools.length>0 && (asksNeed||asksCan||asksWithout||explicitSupplyPhrase||['pencil','paper','eraser','ruler','sharpener','tablet','stylus','phone','laptop','krita','photoshop','procreate','clip-studio','ink-pen'].includes(matchedTools[0].id))) || explicitSupplyPhrase || asksNeed || asksCan || asksWithout;

    if(moduleNumber && (toolIntent || moduleNumber===2 || moduleNumber===3)) {
      const m=findModule('m'+moduleNumber);
      if(m){
        const title=getTitle(m)||m.title||('Module '+moduleNumber);
        if(moduleNumber===2 && hasSubAny(q,['skip','leave out','avoid','chhod','chhor'])){
          return hi?'Module 2 ko completely skip mat karo. Ye one-time materials setup hai aur Module 3 ki prerequisite list mein m2 hai. Lekin iska matlab expensive kit kharidna nahi: ek HB/2B pencil aur normal paper se start karo; recommended basics ko dheere-dheere arrange karo.':'Do not skip Module 2 completely. It is a one-time materials setup, and Module 3 lists m2 as a prerequisite. That does not mean buying an expensive kit: start with an HB/2B pencil and ordinary paper, then add the recommended basics gradually.';
        }
        if(moduleNumber===2){
          return hi
            ? '**Module 2 — Materials & Tools**\n• Minimum: ek HB ya 2B pencil, normal copy paper/newsprint, ek proper vinyl/plastic eraser, sharpener aur simple ruler.\n• Dated work ke liye sketchbook useful hai, par daily drills ke liye compulsory nahi.\n• Kneaded eraser optional hai; blending stump, charcoal, colour pencils, special paper aur bada pencil set baad mein le sakte ho.\n• 4B/6B ki zaroorat Module 12 (Shading) se pehle nahi.\nSource: Module 2 — Materials & Tools.'
            : '**Module 2 — Materials & Tools**\n• Minimum: one HB or 2B pencil, ordinary copy paper/newsprint, one real vinyl/plastic eraser, a sharpener and a simple ruler.\n• A sketchbook is useful for dated work, but not needed for daily drills.\n• A kneaded eraser is optional; blending stumps, charcoal, coloured pencils, specialty paper and a large pencil set can wait.\n• You do not need 4B/6B until Module 12 (Shading).\nSource: Module 2 — Materials & Tools.';
        }
        if(moduleNumber===3){
          return hi
            ? '**Module 3 — How to Hold a Pencil**\nIs lesson ke liye sirf pencil aur paper chahiye. Writing/tripod grip chhote controlled details ke liye, overhand grip lambi confident construction strokes ke liye, aur underhand grip loose gesture ke liye sikhaya gaya hai. Construction lines par halka pressure rakho. Koi special extra tool required nahi.\nSource: Module 3 — How to Hold a Pencil.'
            : '**Module 3 — How to Hold a Pencil**\nYou only need a pencil and paper for this lesson. It teaches three grips: writing/tripod grip for small controlled detail, overhand grip for long confident construction strokes, and underhand grip as a looser option. It also teaches light pressure for construction lines. No special extra tool is required.\nSource: Module 3 — How to Hold a Pencil.';
        }
        const core=Array.isArray(m.coreIdea)?m.coreIdea.slice(0,4).map(cleanHtml):[];
        const emptyMsg = hi ? 'Poora lesson dekhne ke liye module kholo.' : 'Open the module for its full lesson content.';
        return '**Module '+moduleNumber+' — '+title+'**\n'+(core.length?core.map(x=>'• '+x).join('\n'):emptyMsg)+'\nSource: Module '+moduleNumber+' — '+title+'.';
      }
    }
    if(!toolIntent) return null;
    const found=matchedTools;
    if(asksNeed && found.some(t=>t.id==='blending')) return hi?'Nahi, blending stump compulsory nahi hai. Hatching, cross-hatching aur contour hatching se bhi values build kar sakte ho. Blending sirf tab use karo jab smooth gradient chahiye. Source: Module 12 — Shading Systems.':'No, a blending stump is not compulsory. You can build values with hatching, cross-hatching and contour hatching. Blend only when you specifically want a smooth gradient. Source: Module 12 — Shading Systems.';
    if(asksNeed && found.some(t=>t.id==='tablet'||t.id==='stylus')) return hi?'Nahi, traditional drawing shuru karne ke liye tablet/stylus ki zaroorat nahi. Ye digital-art track ke liye optional setup hai; course mein digital fundamentals baad mein aate hain.':'No, you do not need a tablet or stylus to begin traditional drawing. They are optional for the digital-art track, which comes later in the course.';
    if(asksNeed && (hasTerm(q,'4b') || hasTerm(q,'6b'))){
      return hi?'Nahi, abhi 4B/6B kharidna zaroori nahi. Foundations ke liye HB ya 2B kaafi hai; 4B/6B ko Module 12 (Shading) tak wait kara sakte ho. Source: Module 2 — Materials & Tools.':'No — you do not need to buy 4B/6B yet. HB or 2B is enough for the Foundations arc; you can wait until Module 12 (Shading) before adding softer grades. Source: Module 2 — Materials & Tools.';
    }
    if(asksWithout && found.length){
      const t=found[0];
      if(t.id==='eraser') return hi?'Haan, eraser ke bina bhi drawing shuru kar sakte ho. Construction lines halki rakho, drawing ko stages mein banao aur har line perfect karne ki koshish mat karo. Proper eraser useful hai, lekin start karne ki condition nahi. Source: Module 2 — Materials & Tools.':'Yes — you can still start drawing without an eraser. Keep construction lines light, build the drawing in stages, and treat early marks as guides rather than trying to make every line perfect. A proper eraser is useful, but it is not a prerequisite for beginning. Source: Module 2 — Materials & Tools.';
      if(t.id==='ruler') return hi?'Haan, ruler ke bina freehand drawing practice kar sakte ho. Ruler sirf measured straight edges ya guides ke liye use karo; freehand line control haath se hi practice hota hai. Source: Module 2 — Materials & Tools.':'Yes — you can practise freehand drawing without a ruler. Use a ruler only when you need measured straight edges or guides; freehand line control should still be practised by hand. Source: Module 2 — Materials & Tools.';
      if(t.id==='blending') return hi?'Haan, blending tools optional hain. Stump ya tissue ke bina hatching, cross-hatching aur contour hatching se values build karo. Source: Module 12 — Shading Systems.':'Yes — blending tools are optional. Use hatching, cross-hatching or contour hatching to build values without a stump or tissue. Source: Module 12 — Shading Systems.';
      return hi
        ? 'Jo tools tumhare paas abhi hain unse hi shuru kar sakte ho. Ye tool kuch kaam ke liye useful hai, par har drawing exercise ke liye zaroori nahi. Exact task batao toh main minimum setup check kar dunga.'
        : 'You can begin with the tools you already have. This item is useful for some tasks, but it is not automatically required for every drawing exercise. Tell me the exact drawing task and I can check the minimum setup.';
    }
    if(!found.length && asksShade && (asksNeed || asksCan)){
      return hi?'Shading ke liye shuruaat ek HB ya 2B pencil aur paper se ho sakti hai. Pehle light, mid aur dark values samjho; hatching, cross-hatching aur contour hatching try karo. Blending stump optional hai. 4B/6B Module 12 ke aas-paas useful honge, abhi compulsory nahi. Source: Module 12 — Shading Systems.':'You can begin shading with an HB or 2B pencil and paper. Start by separating light, mid and dark values; practise hatching, cross-hatching and contour hatching. A blending stump is optional. 4B/6B become useful around Module 12, but are not compulsory now. Source: Module 12 — Shading Systems.';
    }
    if(!found.length && asksNeed){
      return hi?'**Minimum drawing kit**\nStart karne ka absolute minimum ek pencil (HB/2B) aur normal paper hai. Module 2 ka recommended basic kit proper eraser, sharpener aur simple ruler bhi include karta hai. Dated work ke liye sketchbook optional hai. Mehange pencil sets, blending stump, charcoal aur special paper abhi mat kharido. Sirf pencil aur paper se bhi basic line aur shape practice shuru kar sakte ho.\nSource: Module 2 — Materials & Tools.':'**Minimum drawing kit**\nThe absolute minimum to begin is one HB/2B pencil and ordinary paper. Module 2\'s recommended basic kit also includes a proper eraser, sharpener and simple ruler. A sketchbook is optional for keeping dated work. Expensive pencil sets, blending stumps, charcoal and specialty paper can wait. You can still begin basic line and shape practice with just a pencil and paper.\nSource: Module 2 — Materials & Tools.';
    }
    if(!found.length && asksCan) return hi?'Apne paas jo tools hain unke naam likh do — jaise HB pencil, 2B, eraser, ruler, tablet ya phone. Main bata dunga unse kya-kya kar sakte ho aur kya missing hai.':'List the tools you have (for example, HB pencil, 2B, eraser, ruler, tablet or phone). I can map what you can do with them and what, if anything, is missing.';
    if(!found.length) return null;
    const names=found.map(t=>t.label);
    let out=hi?'**Tumhare tools: '+names.join(', ')+'**\n':'**Your tools: '+names.join(', ')+'**\n';
    const hasPencil=found.some(t=>t.id==='pencil');
    const hasPaper=found.some(t=>t.id==='paper');
    if(hasPencil&&hasPaper){
      out+=hi?'Tum abhi traditional drawing start kar sakte ho: lines, ellipses, basic shapes, simple forms aur observation studies. Foundations ke liye HB ya 2B kaafi hai.\n':'You can begin traditional drawing practice now: lines, ellipses, basic shapes, simple forms and observation studies. HB or 2B is enough for the Foundations arc.\n';
    }else if(hasPencil&&!hasPaper){
      out+=hi?'Pencil hai, ab bas koi bhi normal paper/notebook surface arrange karo; phir basic drawing drills start kar sakte ho.\n':'You have a pencil; add any ordinary paper or notebook surface and you can begin basic drawing drills.\n';
    }else if(hasPaper&&!hasPencil){
      out+=hi?'Paper hai; drawing start karne ke liye ek basic HB ya 2B pencil add karo.\n':'You have a drawing surface; add a basic HB or 2B pencil to begin.\n';
    }
    found.forEach(t=>{
      out+='• '+t.label+': '+(hi?(t.hiCan||t.can):t.can)+'\n';
      if(t.limit) out+='  '+(hi?('Dhyan rahe: '+(t.hiLimit||t.limit)):('Limit: '+t.limit))+'\n';
    });
    if(asksShade){out+=hi?'\nShading ke liye pehle light, mid aur dark value map banao. Hatching, cross-hatching ya contour hatching practice karo. Blending stump optional hai; har jagah blending mat karo. 4B/6B baad ke shading module mein kaam aayenge.\n':'\nFor shading: begin with a value map and practise hatching, cross-hatching or contour hatching. A blending stump is optional; do not blend everything by default. 4B/6B are not needed until the shading module.\n';}
    if(asksDigital){out+=hi?'\nDigital art ke liye canvas, brush, layers panel aur colour picker locate karo. Default round brush aur sketch/line/colour ki simple layer structure se shuru karo; extra tools tab seekho jab actual kaam mein zaroorat ho.\n':'\nFor digital work, the core setup is a canvas, brush, layers panel and colour picker. Start with a default round brush and a simple sketch/line/colour layer structure; learn extra tools only when a real task requires them.\n';}
    if(asksNeed && found.some(t=>['pencil','paper'].includes(t.id))){out+=hi?'\n**Aur tools chahiye?** Start karne ke liye expensive kit ki zaroorat nahi. Jo basic cheez missing ho, use dheere-dheere add karo; advanced accessories pehle mat kharido.\n':'\n**Do you need more?** No expensive kit is needed to start. Add only the missing basics gradually; do not buy advanced accessories before a lesson calls for them.\n';}
    if(asksCan && found.length===1 && !['pencil','paper'].includes(found[0].id)){out+=hi?'\nYe tool useful hai, par akela baaki basic setup ki jagah nahi le sakta.\n':'\nThis tool is useful, but by itself it does not replace the rest of the basic setup.\n';}
    out+=hi?'\nCourse references: Module 2 — Materials & Tools; Module 3 — How to Hold a Pencil; Module 12 — Shading Systems; Module 83–85 — Digital Art Fundamentals.':'\nCourse references: Module 2 — Materials & Tools; Module 3 — How to Hold a Pencil; Module 12 — Shading Systems; Module 83–85 — Digital Art Fundamentals.';
    return out;
  }
  return {answer,toolCount:TOOLS.length};
})();
