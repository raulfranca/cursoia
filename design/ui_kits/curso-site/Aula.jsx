const { ModuleCard, Card, Badge, Button, IconButton, Tabs, Callout, Checklist, Icon, Switch, Tooltip, HandNote } = window.IAParaProfessoresDesignSystem_518ecc;

function Aula() {
  const [tab,setTab]=React.useState('aula');
  const [lembretes,setLembretes]=React.useState(true);
  return (
    <div style={{maxWidth:'var(--container-wide)',margin:'0 auto',padding:'32px',display:'grid',gridTemplateColumns:'280px 1fr',gap:32,alignItems:'start'}}>
      {/* Sidebar */}
      <aside style={{display:'flex',flexDirection:'column',gap:16,position:'sticky',top:92}}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <span style={{width:40,height:40,borderRadius:999,background:'var(--ink-1)',color:'var(--paper-0)',display:'grid',placeItems:'center',font:'var(--weight-semibold) 15px var(--font-body)'}}>MA</span>
          <div><div style={{fontSize:'var(--size-sm)',fontWeight:600}}>Marina Alves</div><div style={{fontSize:'var(--size-xs)',color:'var(--text-caption)'}}>Turma de março</div></div>
        </div>
        <div style={{height:1,background:'var(--line-hairline)'}} />
        <div style={{display:'flex',flexDirection:'column',gap:4}}>
          {[['play-circle','Aula da semana',true],['folder','Materiais',false],['messages-square','Grupo da turma',false],['award','Certificado',false],['settings','Preferências',false]].map(([ic,label,active])=>(
            <a key={label} href="#" onClick={(e)=>e.preventDefault()} style={{display:'flex',alignItems:'center',gap:10,padding:'9px 12px',borderRadius:'var(--radius-md)',textDecoration:'none',fontSize:'var(--size-sm)',fontWeight:active?600:500,color:active?'var(--ink-1)':'var(--ink-3)',background:active?'var(--paper-2)':'transparent'}}>
              <Icon name={ic} size={17} />{label}
            </a>
          ))}
        </div>
        <div style={{height:1,background:'var(--line-hairline)'}} />
        <div style={{display:'flex',flexDirection:'column',gap:10}}>
          <span style={{font:'var(--text-eyebrow)',textTransform:'uppercase',letterSpacing:'var(--track-caps)',color:'var(--text-caption)'}}>Seu progresso</span>
          <div style={{height:8,borderRadius:999,background:'var(--paper-3)',overflow:'hidden'}}><div style={{width:'50%',height:'100%',background:'var(--lousa-500)'}} /></div>
          <span style={{fontSize:'var(--size-xs)',color:'var(--text-caption)'}}>2 de 4 encontros concluídos</span>
          <Switch checked={lembretes} onChange={setLembretes}>Lembretes por e-mail</Switch>
        </div>
      </aside>

      {/* Conteúdo */}
      <main style={{display:'flex',flexDirection:'column',gap:24}}>
        <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:20}}>
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            <span style={{font:'var(--text-eyebrow)',textTransform:'uppercase',letterSpacing:'var(--track-caps)',color:'var(--accent-secondary)'}}>Semana 03 · ao vivo hoje</span>
            <h1 style={{font:'var(--weight-semibold) 39px/1.08 var(--font-display)',letterSpacing:'-.025em'}}>Adaptação e avaliação</h1>
          </div>
          <div style={{display:'flex',gap:8}}>
            <Tooltip label="Salvar para depois"><IconButton icon="bookmark" label="Salvar" /></Tooltip>
            <Tooltip label="Baixar materiais"><IconButton icon="download" label="Baixar" /></Tooltip>
            <Button icon="video">Entrar na sala</Button>
          </div>
        </div>

        <div style={{position:'relative',aspectRatio:'16 / 9',background:'var(--paper-1)',border:'1.5px solid var(--line-strong)',borderRadius:'var(--radius-card)',overflow:'hidden',display:'grid',placeItems:'center'}}>
          <img src="../../assets/illustrations/atividade-em-sala.png" alt="" style={{width:'100%',height:'100%',objectFit:'cover'}} />
          <div style={{position:'absolute',inset:0,display:'grid',placeItems:'center'}}>
            <span style={{width:76,height:76,borderRadius:999,background:'var(--ocre-500)',border:'1.5px solid var(--ink-1)',boxShadow:'var(--shadow-ink-sm)',display:'grid',placeItems:'center',color:'var(--ink-1)'}}><Icon name="play" size={30} /></span>
          </div>
          <div style={{position:'absolute',left:16,top:16,display:'flex',gap:8}}><Badge tone="danger" icon="radio">Ao vivo 19h30</Badge></div>
        </div>

        <Tabs items={[{id:'aula',label:'Nesta aula'},{id:'tarefa',label:'Prática da semana'},{id:'notas',label:'Minhas notas'}]} value={tab} onChange={setTab} />

        {tab==='aula' && (
          <div style={{display:'grid',gridTemplateColumns:'1.3fr .7fr',gap:24,alignItems:'start'}}>
            <div style={{display:'flex',flexDirection:'column',gap:16}}>
              <p style={{font:'var(--text-base)',color:'var(--text-muted)',maxWidth:'62ch'}}>Hoje pegamos uma atividade sua e a transformamos em três versões — leitura inicial, intermediária e avançada — sem reescrever o enunciado do zero. Depois montamos a rubrica que devolve o critério para a sua mão.</p>
              <Checklist items={['Três versões de um mesmo enunciado','Uma rubrica de 4 níveis pronta para colar no caderno','Um roteiro de devolutiva de 3 linhas']} />
              <Callout tone="warning" icon="alert-triangle" title="Antes de rodar com a turma">Leia as três versões em voz alta. Se alguma frase não soar como você, ela não vai para a sala.</Callout>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:12}}>
              <Card variant="band"><strong style={{font:'var(--text-h3)'}}>Materiais</strong>
                <div style={{display:'flex',flexDirection:'column',gap:10,marginTop:8}}>
                  {['Guia de prompts (PDF)','Modelos de rubrica (DOC)','Slides do encontro'].map(t=>(<a key={t} href="#" onClick={e=>e.preventDefault()} style={{display:'flex',gap:8,alignItems:'center',fontSize:'var(--size-sm)',textDecoration:'none'}}><Icon name="download" size={15} />{t}</a>))}
                </div>
              </Card>
              <HandNote>imprima a rubrica antes 🙂</HandNote>
            </div>
          </div>
        )}
        {tab==='tarefa' && (
          <div style={{display:'flex',flexDirection:'column',gap:12,maxWidth:820}}>
            <ModuleCard index="01" title="Traga uma atividade sua" description="Qualquer uma que você já aplicou neste bimestre." done />
            <ModuleCard index="02" title="Gere as três versões" description="Use o pedido da página 12 do guia." duration="20 min" />
            <ModuleCard index="03" title="Poste no grupo da turma" description="Uma frase sobre o que mudou de verdade." duration="5 min" />
          </div>
        )}
        {tab==='notas' && (
          <Card><strong style={{font:'var(--text-h3)'}}>Minhas notas</strong><p style={{font:'var(--text-base)',color:'var(--text-muted)'}}>Anote aqui o que funcionou com a sua turma. Suas notas ficam visíveis só para você.</p>
            <textarea className="iap-input iap-textarea" placeholder="Na semana passada, o pedido curto funcionou melhor do que o detalhado…" style={{marginTop:12}} />
          </Card>
        )}
      </main>
    </div>
  );
}

Object.assign(window, { Aula });
