import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
        Not Found
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-slate-50">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="mt-4 text-sm text-slate-400">
        요청한 경력 상세 페이지가 없거나 주소가 변경되었습니다.
      </p>
      <Link
        href="/"
        className="mt-8 w-fit rounded-full border border-teal-400/40 bg-teal-400/10 px-4 py-2 text-sm font-medium text-teal-200 hover:border-teal-300/70"
      >
        메인으로 돌아가기
      </Link>
    </main>
  );
}
