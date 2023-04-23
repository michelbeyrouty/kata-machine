export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {

    const seen: boolean[] = new Array(graph.length).fill(false);
    const path: number[] = [];

    walk(graph, source, needle, seen, path)

    if (!path.length) {
        return null
    }

    return path
}


function walk(graph: WeightedAdjacencyList, current: number, needle: number, seen: boolean[], path: number[]): boolean {

    if (seen[current]) {
        return false;
    }

    seen[current] = true;

    // Previous
    path.push(current)
    if (current === needle) {
        return true;
    }

    // Recurse
    const list = graph[current]
    for (let i = 0; i < list.length; i++) {
        const edge = list[i]

        if (walk(graph, edge.to, needle, seen, path)) {
            return true;
        }

    }

    // Post
    path.pop()

    return false;
}
