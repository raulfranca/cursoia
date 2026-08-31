const { SectionHeading, ModuleCard, Tabs, Card, Button, Badge, Callout, Illustration, Icon } = window.IAParaProfessoresDesignSystem_518ecc;

const MODULOS = [
  ['01','A IA como colega de planejamento','Onde ela ajuda de verdade, onde ela erra feio, e como você mantém a decisão pedagógica.','45 min','Vídeo + prática'],
  ['02','Prompts que viram plano de aula','A estrutura de pedido que devolve objetivo, atividade e fechamento na sua voz.','45 min','Vídeo + modelo'],
  ['03','Adaptação e avaliação','Uma atividade em três níveis; rubricas e devolutivas com critério seu.','50 min','Oficina ao vivo'],
  ['04','Uso responsável na escola','Dados de aluno, plágio, combinados de turma e conversa com a coordenação.','45 min','Roda de conversa'],
];

function Programa({ go }) {
  const [tab, setTab] = React.useState('modulos');
  return (
    <div style={{maxWidth:'var(--container)',margin:'0 auto',padding:'64px 32px 96px'}}>
      <div style={{display:'grid',gridTemplateColumns:'1.15fr .85fr',gap:56,alignItems:'center',marginBottom:56}}>
        <SectionHeading eyebrow="O programa" title="Quatro semanas, uma prática nova" lead="Terças, 19h30, ao vivo. Cada encontro entrega um material que você usa na aula seguinte — e fica com você para sempre." />
        <Illustration src="../../assets/illustrations/professora-tem-ideias.png" alt="Professora conversando com um robô" variant="framed" />
      </div>

      <Tabs items={[{id:'modulos',label:'Módulos'},{id:'materiais',label:'Materiais'},{id:'certificado',label:'Certificado'}]} value={tab} onChange={setTab} />

      <div style={{paddingTop:32}}>
        {tab==='modulos' && (
          <div style={{display:'grid',gridTemplateColumns:'1fr',gap:12,maxWidth:820}}>
            {MODULOS.map(([i,t,d,dur,fmt])=>(<ModuleCard key={i} index={i} title={t} description={d} duration={dur} format={fmt} />))}
            <Callout tone="info" icon="calendar" title="Não pode ao vivo?" style={{marginTop:12}}>Todos os encontros ficam gravados por 12 meses, com transcrição e os materiais anexos.</Callout>
          </div>
        )}
        {tab==='materiais' && (
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
            {[['book-open','Guia de prompts','32 pedidos prontos, por etapa de ensino'],['clipboard-list','Modelos de rubrica','5 rubricas editáveis em documento'],['file-check','Combinados de turma','Cartaz e texto para enviar às famílias'],['presentation','Slides da formação','Para levar à sua reunião pedagógica'],['messages-square','Grupo de turma','Dúvidas respondidas durante as 4 semanas'],['repeat','Encontro de retomada','Uma sessão extra 30 dias depois']].map(([ic,t,d])=>(
              <Card key={t}><div style={{display:'flex',alignItems:'center',gap:10}}><Icon name={ic} size={18} style={{color:'var(--accent-primary)'}} /><strong style={{font:'var(--text-h3)'}}>{t}</strong></div><p style={{font:'var(--text-small)',color:'var(--text-muted)'}}>{d}</p></Card>
            ))}
          </div>
        )}
        {tab==='certificado' && (
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:32,alignItems:'start'}}>
            <Card variant="ink"><Badge tone="brand">Incluso</Badge><strong style={{font:'var(--text-h3)',marginTop:8}}>Certificado de 20 horas</strong><p style={{font:'var(--text-base)',color:'var(--text-muted)'}}>Emitido em nome da sua escola quando a inscrição é institucional. Aceito como formação continuada na maioria das redes.</p></Card>
            <Callout tone="warning" icon="alert-triangle" title="Antes de contar como carga horária">Confirme com a sua secretaria de educação — as regras de aproveitamento variam por rede.</Callout>
          </div>
        )}
      </div>

      <div style={{display:'flex',alignItems:'center',gap:20,marginTop:56,paddingTop:32,borderTop:'1px solid var(--line-hairline)'}}>
        <Button size="lg" iconRight="arrow-right" onClick={()=>go('inscricao')}>Inscrever-se na turma de março</Button>
        <span style={{fontSize:'var(--size-sm)',color:'var(--text-caption)'}}>R$ 390 · em até 6x · reembolso em 7 dias</span>
      </div>
    </div>
  );
}

Object.assign(window, { Programa });
