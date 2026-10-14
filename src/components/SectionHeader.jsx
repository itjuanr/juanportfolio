// Cabeçalho padrão das seções: caminho em estilo de terminal (~/sobre) e título grande,
// com o ponto final na cor de destaque.
export default function SectionHeader({ title }) {
  return (
    <div className="section__header" data-reveal>
      <p className="section__path" aria-hidden="true">
        {title.toLowerCase()}
      </p>
      <h2 className="section__title">
        {title}
        <span className="dot">.</span>
      </h2>
    </div>
  )
}
