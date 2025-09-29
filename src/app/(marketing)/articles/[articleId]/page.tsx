"use client";
import Link from "next/link";
import { use } from "react";

export default function NewArticle({ params, searchParams }: { params: Promise<{ articleId: string }>, searchParams: Promise<{ lang?: string }> }) {
    const resolvedParams = use(params);
    const resolvedSearchParams = use(searchParams);
    const lang = resolvedSearchParams?.lang || "en";
    return (
        <>
            <h1>New article {resolvedParams.articleId}</h1>
            <p>Reading in {lang} language</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <Link href={`/articles/${resolvedParams.articleId}?lang=en`} className="text-blue-600 underline">English</Link>
                <Link href={`/articles/${resolvedParams.articleId}?lang=es`} className="text-blue-600 underline">Spanish</Link>
                <Link href={`/articles/${resolvedParams.articleId}?lang=fr`} className="text-blue-600 underline">French</Link>
            </div>
        </>
    );
}
