/**
 * Splits a quotable answer into its first sentence (the hero lead) and the rest (the card under the buttons).
 * `lead + ' ' + rest` is the answer again, so nothing is lost; an answer with no sentence end stays whole in `lead`.
 * A sentence ends at . ! ? or the Arabic ؟ followed by a space and more text.
 */
export function splitLead(text: string): { lead: string; rest: string } {
  const end = /[.!?؟](?=\s+\S)/.exec(text);
  if (!end) return { lead: text, rest: '' };
  const cut = end.index + 1;
  return { lead: text.slice(0, cut), rest: text.slice(cut).trimStart() };
}
