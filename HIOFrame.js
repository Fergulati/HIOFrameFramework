const express = require('express');
const app = express();

app.use(express.json());

const preimage_url = "https://media.discordapp.net/attachments/1086277219749474424/1202079543272149052/snail_with_a_hat_japanese_scroll_ink_1.png?ex=65cc26d0&is=65b9b1d0&hm=0cc4d81ac64aeb1a2c4d61df51e4233862c002c11b13eed93291f6a25fcbcded&=&format=webp&quality=lossless&width=2422&height=1275";

const postimage_url = "https://media.discordapp.net/attachments/1086277219749474424/1202079543272149052/snail_with_a_hat_japanese_scroll_ink_1.png?ex=65cc26d0&is=65b9b1d0&hm=0cc4d81ac64aeb1a2c4d61df51e4233862c002c11b13eed93291f6a25fcbcded&=&format=webp&quality=lossless&width=2422&height=1275";

app.get("/", (req, res) => {
  const body = `
  <!DOCTYPE html>
  <html>
    <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width"/>
        <meta property="og:title" content="Hashing It Out Sensei" />
        <meta property='og:image' content=${preimage_url} />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${preimage_url}" />
        <meta property="fc:frame:button:1" content="Get This Episode" />
        <meta property="fc:frame:post_url" content="https://cdn.simplecast.com/audio/b623b331-ffef-40c4-918d-b35a07ee8729/episodes/4f446272-db96-4970-a657-9cb1e1bc5fb2/audio/61852154-6e1f-4972-8722-9a52fcaaf0ae/default_tc.mp3?nocache" />
    </head>
    </html>
    `;

  res.status(200).setHeader("Content-Type", "text/html").send(body);
});

app.post("/grow", (req, res) => {
  const body = `
  <!DOCTYPE html>
  <html>
    <head>
        <meta property="og:title" content="Hashing It Out Sensei" />
        <meta property='og:image' content=${postimage_url} />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${postimage_url}" />
    </head>
    </html>
    `;

  res.status(200).setHeader("Content-Type", "text/html").send(body);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
