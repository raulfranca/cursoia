const { Input, Select, Checkbox, Radio, Button, Card, Badge, Callout, Dialog, Toast, SectionHeading, Icon } = window.IAParaProfessoresDesignSystem_518ecc;

function Inscricao({ go }) {
  const [etapa,setEtapa]=React.useState('');
  const [plano,setPlano]=React.useState('individual');
  const [aceite,setAceite]=React.useState(false);
  const [erro,setErro]=React.useState('');
  const [confirm,setConfirm]=React.useState(false);
  const [feito,setFeito]=React.useState(false);

  const enviar=()=>{ if(!aceite){setErro('Confirme que você leu os combinados.');return;} setErro(''); setConfirm(true); };

  return (
    <div style={{position:'relative',maxWidth:'var(--container)',margin:'0 auto',padding:'64px 32px 96px'}}>
      <div style={{display:'grid',gridTemplateColumns:'1.1fr .9fr',gap:56,alignItems:'start'}}>
        <div style={{display:'flex',flexDirection:'column',gap:28}}>
          <SectionHeading eyebrow="Inscrição · turma de março" title="Falta pouco" lead="São cinco campos. A gente devolve o link da primeira aula por e-mail." />
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
            <Input label="Seu nome" required placeholder="Como você quer ser chamada" />
            <Input label="E-mail" required placeholder="voce@escola.br" hint="Usamos só para as aulas e materiais." />
            <Select label="Etapa em que você atua" required placeholder="Escolha uma opção" value={etapa} onChange={(e)=>setEtapa(e.target.value)} options={['Educação Infantil','Fundamental I','Fundamental II','Ensino Médio','Coordenação / gestão']} />
            <Input label="Escola (opcional)" placeholder="Nome da escola" />
            <Input label="O que você quer resolver nessas 4 semanas?" multiline placeholder="Ex.: adaptar atividades para uma turma com três níveis de leitura" style={{gridColumn:'1 / -1'}} />
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <span className="iap-label">Como você vai pagar</span>
            <Radio name="plano" value="individual" checked={plano==='individual'} onChange={setPlano}>Individual — R$ 390, em até 6x</Radio>
            <Radio name="plano" value="escola" checked={plano==='escola'} onChange={setPlano}>Pela escola — nota fiscal e certificado institucional</Radio>
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            <Checkbox checked={aceite} onChange={(v)=>{setAceite(v);setErro('');}}>Li os combinados de turma e a política de dados</Checkbox>
            {erro && <span className="iap-hint iap-hint--error">{erro}</span>}
          </div>

          <div style={{display:'flex',alignItems:'center',gap:16}}>
            <Button size="lg" iconRight="arrow-right" onClick={enviar}>Confirmar inscrição</Button>
            <Button size="lg" variant="ghost" onClick={()=>go('programa')}>Rever o programa</Button>
          </div>
        </div>

        <div style={{display:'flex',flexDirection:'column',gap:20,position:'sticky',top:100}}>
          <Card variant="ink">
            <Badge tone="warning" icon="clock">Últimas 8 vagas</Badge>
            <strong style={{font:'var(--text-h3)',marginTop:8}}>Turma de março</strong>
            <div style={{display:'flex',flexDirection:'column',gap:10,marginTop:12,font:'var(--text-small)',color:'var(--text-muted)'}}>
              {[['calendar','4 terças, a partir de 9 de março'],['clock','19h30 às 20h15, ao vivo'],['video','Gravações por 12 meses'],['award','Certificado de 20 horas']].map(([ic,t])=>(<span key={t} style={{display:'flex',gap:10,alignItems:'center'}}><Icon name={ic} size={16} style={{color:'var(--accent-primary)'}} />{t}</span>))}
            </div>
            <div style={{marginTop:16,paddingTop:16,borderTop:'1px solid var(--line-hairline)',display:'flex',alignItems:'baseline',gap:8}}>
              <span style={{font:'var(--weight-semibold) 31px/1 var(--font-display)'}}>R$ 390</span>
              <span style={{font:'var(--text-small)',color:'var(--text-caption)'}}>ou 6x de R$ 68</span>
            </div>
          </Card>
          <Callout tone="brand" icon="undo-2" title="Sem risco">Se a primeira aula não servir para você, devolvemos o valor integral em até 7 dias.</Callout>
        </div>
      </div>

      {confirm && (
        <Dialog title="Confirmar inscrição" onClose={()=>setConfirm(false)}
          actions={<><Button variant="secondary" onClick={()=>setConfirm(false)}>Voltar</Button><Button onClick={()=>{setConfirm(false);setFeito(true);}}>Confirmar</Button></>}>
          Vamos reservar sua vaga na turma de 9 de março e enviar o link da primeira aula para o e-mail informado.
        </Dialog>
      )}
      {feito && (
        <div style={{position:'fixed',bottom:28,left:'50%',transform:'translateX(-50%)',zIndex:40}}>
          <Toast tone="success" onClose={()=>setFeito(false)}>Inscrição confirmada. Verifique seu e-mail.</Toast>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { Inscricao });
