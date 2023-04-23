export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {

    const seen = new Array(graph.length).fill(false);
    const previous = new Array(graph.length).fill(-1);

    seen[source] = 1;
    const q: number[] = [source];

    do {
        const current = q.shift() as number;

        if (current === needle) {
            break;
        }

        const adj = graph[current]
        for (let i = 0; i < adj.length; i++) {
            if (adj[i] === 0) {
                continue;
            }

            if (seen[i] === true) {
                continue;
            }

            seen[i] = true
            previous[i] = current
            q.push(i)
        }

        seen[current] = true

    } while (q.length)

    let current = needle;
    const out: number[] = [];

    while (previous[current] !== -1) {
        out.push(current)
        current = previous[current]
    }

    if (out.length) {
        return [source].concat(out.reverse())
    }

    return null;
}
