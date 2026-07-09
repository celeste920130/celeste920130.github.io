export default function Footer() {
  return (
    <footer className="border-t py-6 mt-12">
      <div className="container text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Celeste Shih — Built with Next.js
      </div>
    </footer>
  )
}
