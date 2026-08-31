const { Button, Badge, SectionHeading, Card, Stat, Quote, Illustration, Checklist, HandNote, Callout, Tag, Icon } = window.IAParaProfessoresDesignSystem_518ecc;

function Home({ go }) {
  return (
    <div>
      {/* Hero */}
      <section style={{maxWidth:'var(--container)',margin:'0 auto',padding:'72px 32px 56px',display:'grid',gridTemplateColumns:'1.05fr .95fr',gap:56,alignItems:'center'}}>
        <div style={{display:'flex',flexDirection:'column',gap:22}}>
          <span style={{font:'var(--text-eyebrow)',textTransform:'uppercase',letterSpacing:'var(--track-caps)',color:'var(--accent-secondary)'}}>Formação de 4 semanas · online</span>
          <h1 style={{font:'var(--weight-semibold) 61px/1.04 var(--font-display)',letterSpacing:'-.025em'}}>IA que cabe na sua aula de segunda-feira</h1>
          <p style={{font:'var(--text-lead)',color:'var(--text-muted)',maxWidth:'42ch'}}>Você não precisa virar programadora. Precisa de quatro semanas, um caderno e uma turma real para testar.</p>
          <div style={{display:'flex',alignItems:'center',gap:16,flexWrap:'wrap'}}>
            <Button size="lg" iconRight="arrow-right" onClick={()=>go('inscricao')}>Quero participar</Button>
            <Button size="lg" variant="ghost" icon="play">Assistir à aula aberta</Button>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:18,paddingTop:6}}>
            <span style={{fontSize:'var(--size-sm)',color:'var(--text-caption)'}}>Turma de março · 40 vagas · R$ 390</span>
            <HandNote tone="accent">últimas 8 vagas</HandNote>
          </div>
        </div>
        <Illustration src="../../assets/illustrations/professora-no-laptop.png" alt="Professora planejando aula no laptop" />
      </section>

      {/* Faixa de stats */}
      <section style={{borderTop:'1px solid var(--line-hairline)',borderBottom:'1px solid var(--line-hairline)',background:'var(--bg-band)'}}>
        <div style={{maxWidth:'var(--container)',margin:'0 auto',padding:'32px',display:'flex',gap:56}}>
          <Stat value="4 semanas" label="Duração total" />
          <Stat value="45 min" label="Por encontro" variant="rule" />
          <Stat value="+1.200" label="Professores formados" variant="rule" />
          <Stat value="12 materiais" label="Prontos para usar" variant="rule" />
        </div>
      </section>

      {/* O que você leva */}
      <section style={{maxWidth:'var(--container)',margin:'0 auto',padding:'96px 32px'}}>
        <SectionHeading eyebrow="O que muda" title="Você sai com material pronto, não com teoria" lead="Cada semana termina com uma coisa que você usa na aula seguinte. Nada de \u201cexplorar a ferramenta\u201d." />
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24,marginTop:40}}>
          {[
            ['file-text','Plano de aula em 15 minutos','Do objetivo à atividade, com a sua voz e a sua turma no meio.','professora-tem-ideias.png'],
            ['users','Uma atividade, três níveis','Adaptar leitura e enunciado sem reescrever tudo do zero.','atividade-em-sala.png'],
            ['pen-line','Correção com critério','Feedback mais rápido sem terceirizar a avaliação.','montando-robo.png'],
          ].map(([icon,title,desc,img])=>(
            <Card key={title} media={<img src={`../../assets/illustrations/${img}`} alt="" style={{}} />} mediaHeight={168}>
              <div style={{display:'flex',alignItems:'center',gap:10}}><Icon name={icon} size={18} style={{color:'var(--accent-primary)'}} /><strong style={{font:'var(--text-h3)'}}>{title}</strong></div>
              <p style={{font:'var(--text-small)',color:'var(--text-muted)'}}>{desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Para quem é */}
      <section style={{background:'var(--paper-0)',borderTop:'1px solid var(--line-hairline)',borderBottom:'1px solid var(--line-hairline)'}}>
        <div style={{maxWidth:'var(--container)',margin:'0 auto',padding:'80px 32px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:56,alignItems:'start'}}>
          <div style={{display:'flex',flexDirection:'column',gap:24}}>
            <SectionHeading eyebrow="Para quem é" title="Se você dá aula, é para você" />
            <Checklist items={[
              'Escrever prompts que devolvem plano de aula utilizável',
              'Adaptar uma mesma atividade para três níveis de leitura',
              'Montar avaliações e rubricas em metade do tempo',
              'Conversar com a sua escola sobre uso responsável de IA',
            ]} />
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
              {['Educação Infantil','Fundamental I','Fundamental II','Ensino Médio','Coordenação'].map(t=>(<Tag key={t}>{t}</Tag>))}
            </div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:20}}>
            <Callout tone="brand" title="Não é um curso de ferramenta">A gente não ensina a clicar em botão. Ensina a pedir bem, ler com desconfiança e decidir o que entra na sua aula.</Callout>
            <Callout tone="danger" icon="shield-alert" title="Dados dos seus alunos">Uma aula inteira sobre o que nunca vai para uma ferramenta aberta: nome completo, nota, laudo, endereço.</Callout>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section style={{maxWidth:'var(--container)',margin:'0 auto',padding:'96px 32px'}}>
        <SectionHeading eyebrow="Quem já fez" title="O que as turmas anteriores contam" align="center" />
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:40,marginTop:48}}>
          <Quote name="Marina Alves" role="Ciências, 7º ano">Saí da primeira aula com uma atividade pronta. Isso nunca aconteceu em formação nenhuma.</Quote>
          <Quote name="Rafael Duarte" role="História, Ensino Médio">Eu já usava, mas de qualquer jeito. Agora tenho um jeito meu, com critério.</Quote>
          <Quote name="Sônia Prado" role="Coordenação pedagógica">Levei o material da semana 4 para a reunião de professores. Virou nossa política de uso.</Quote>
        </div>
      </section>

      {/* CTA */}
      <section style={{background:'var(--lousa-500)',color:'var(--paper-0)'}}>
        <div style={{maxWidth:'var(--container)',margin:'0 auto',padding:'80px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:40}}>
          <div style={{display:'flex',flexDirection:'column',gap:14,maxWidth:'46ch'}}>
            <h2 style={{font:'var(--weight-semibold) 39px/1.1 var(--font-display)',letterSpacing:'-.025em',color:'var(--paper-0)'}}>A próxima turma começa em 9 de março</h2>
            <p style={{fontSize:'var(--size-lg)',lineHeight:1.5,color:'var(--lousa-100)'}}>Quatro terças, 19h30. Gravado se você não puder ao vivo.</p>
          </div>
          <Button variant="ink" size="lg" iconRight="arrow-right" onClick={()=>go('inscricao')}>Garantir minha vaga</Button>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { Home });
