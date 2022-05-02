function randomWordTemplate(wordData)
{
return `<svg
fill="none"
width="800"
height="210"
xmlns="http://www.w3.org/2000/svg"
>
<foreignObject width="800" height="210"
  ><div xmlns="http://www.w3.org/1999/xhtml">
  
    <h1 style="background-color:green; border-radius:10px; border:1px grey solid; text-align:center; color:white; font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;">
    Random word:` + wordData[Math.floor(Math.random() * wordData.length ) + 1] +`
    </h1>

  </div></foreignObject>
</svg>`;
}
module.exports = randomWordTemplate;
