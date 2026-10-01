// Estimate text reading time at 200 words per minute, rounded up.
// Count link labels rather than hidden Markdown destinations.
export function estimateReadingTime(markdown) {
    const text = markdown
        .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
        .replace(/https?:\/\/\S+/g, '');
    const words = text.match(/[\p{L}\p{N}]+(?:[-’'][\p{L}\p{N}]+)*/gu) ?? [];
    return Math.max(1, Math.ceil(words.length / 200));
}
