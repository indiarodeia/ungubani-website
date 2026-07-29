import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-xl flex-col items-start gap-6 px-6 py-32">
      <p className="text-sm font-medium tracking-wide text-accent uppercase">
        Erro 404
      </p>
      <h1 className="text-display-2 font-display font-medium text-foreground italic">
        Página não encontrada
      </h1>
      <p className="text-muted-foreground">
        A página que procuras não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="text-sm font-medium text-primary underline underline-offset-4"
      >
        Voltar ao início
      </Link>
    </main>
  );
}
