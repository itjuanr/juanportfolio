import { profile } from '../data/content'

// Rodapé escrito como um comando de terminal, com o cursor piscando no fim.
export default function Footer() {
  return (
    <footer className="footer">
      echo "© {new Date().getFullYear()} {profile.name}"
      <span className="terminal__cursor" aria-hidden="true" />
    </footer>
  )
}
