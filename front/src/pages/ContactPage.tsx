import ContactSection from '../components/home/ContactSection'
import { contactContent } from '../data/homeContent'

function ContactPage() {
  return (
    <main className="w-full flex-1 px-6 py-20 max-[820px]:py-12">
      <ContactSection {...contactContent} />
    </main>
  )
}

export default ContactPage
