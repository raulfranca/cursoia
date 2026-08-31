const { Button, Badge, Icon, IconButton } = window.IAParaProfessoresDesignSystem_518ecc;

function Nav({ route, go }) {
  const items = [['home','Início'],['programa','Programa'],['aula','Área do aluno']];
  return (
    <header style={{position:'sticky',top:0,zIndex:20,background:'var(--paper-1)',borderBottom:'1px solid var(--line-hairline)'}}>
      <div style={{maxWidth:'var(--container)',margin:'0 auto',padding:'14px 32px',display:'flex',alignItems:'center',gap:32}}>
        <a href="#" onClick={(e)=>{e.preventDefault();go('home');}} style={{textDecoration:'none',font:'var(--weight-semibold) 19px/1.05 var(--font-display)',letterSpacing:'-.03em',color:'var(--ink-1)'}}>IA para<br/>Professores</a>
        <nav style={{display:'flex',gap:26,marginLeft:12}}>
          {items.map(([id,label])=>(
            <a key={id} href="#" onClick={(e)=>{e.preventDefault();go(id);}}
               style={{textDecoration:'none',fontSize:'var(--size-sm)',fontWeight:route===id?600:500,color:route===id?'var(--ink-1)':'var(--ink-3)',borderBottom:route===id?'2px solid var(--terracota-500)':'2px solid transparent',paddingBottom:2}}>{label}</a>
          ))}
        </nav>
        <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:14}}>
          <Badge tone="warning" icon="clock">Turma de março</Badge>
          <Button size="sm" onClick={()=>go('inscricao')}>Inscrever-se</Button>
        </div>
      </div>
    </header>
  );
}

function Footer({ go }) {
  const col = (title, links) => (
    <div style={{display:'flex',flexDirection:'column',gap:10}}>
      <span style={{font:'var(--text-eyebrow)',textTransform:'uppercase',letterSpacing:'var(--track-caps)',color:'var(--ink-4)'}}>{title}</span>
      {links.map(l=>(<a key={l} href="#" onClick={(e)=>e.preventDefault()} style={{fontSize:'var(--size-sm)',color:'var(--paper-2)',textDecoration:'none'}}>{l}</a>))}
    </div>
  );
  return (
    <footer style={{background:'var(--ink-1)',color:'var(--paper-0)',padding:'56px 32px 32px'}}>
      <div style={{maxWidth:'var(--container)',margin:'0 auto',display:'grid',gridTemplateColumns:'1.6fr 1fr 1fr 1fr',gap:40}}>
        <div style={{display:'flex',flexDirection:'column',gap:14}}>
          <span style={{font:'var(--weight-semibold) 22px/1.05 var(--font-display)',letterSpacing:'-.03em'}}>IA para<br/>Professores</span>
          <p style={{fontSize:'var(--size-sm)',lineHeight:1.6,color:'var(--paper-3)',maxWidth:'34ch'}}>Formação prática em inteligência artificial para quem dá aula. Feita por professores, testada em sala.</p>
        </div>
        {col('Curso',['Programa','Datas e turmas','Certificado','Perguntas frequentes'])}
        {col('Materiais',['Guia de prompts','Aula aberta','Newsletter'])}
        {col('Contato',['contato@iaparaprofessores.br','Para escolas','Instagram'])}
      </div>
      <div style={{maxWidth:'var(--container)',margin:'40px auto 0',paddingTop:20,borderTop:'1px solid var(--ink-2)',display:'flex',justifyContent:'space-between',fontSize:'var(--size-xs)',color:'var(--ink-4)'}}>
        <span>© 2026 IA para Professores</span><span>Política de privacidade · Termos</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Footer });
