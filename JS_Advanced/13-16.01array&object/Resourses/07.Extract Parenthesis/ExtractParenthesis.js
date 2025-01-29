function extract(contentID) {
const contentEl= document.getElementById(contentID);
const pattern= /\(([^\(\)]+)\)/g;
const matches=contentEl.textContent.matchAll(pattern);
const arr = Array.from(matches);
const result=arr.map(match=>match[1]);
//console.log(result.join(', '));
return result.join(', ');
}