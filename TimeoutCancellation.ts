function cancellable(fn: (...args: any[]) => void, args: any[], t: number): () => void {
    const timer = setTimeout(() => fn(...args), t);
    return () => clearTimeout(timer);
}
