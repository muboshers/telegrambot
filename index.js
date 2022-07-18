import TelegramBot from "node-telegram-bot-api";
import {
  instagramVideoDownloader,
  tiktokDownloader,
  youTubeDownloader,
} from "./request.js";
const botToken = "5498357821:AAG_9xOU_yL4a2NrRreoM6XbqSVLqxr1zeA";
const bot = new TelegramBot(botToken, { polling: true });

bot.on("message", async (message) => {
  const chatId = message.chat.id;
  if (message.text == "/start") {
    bot.sendMessage(
      chatId,
      `Assalomu Aleykum ${message.chat.first_name} 👏 siz bu yerda tik tok you tube instagramdan video yuklab olishingiz mumkin `
    );
    await bot.sendVideo(
      chatId,
      "https://redirector.googlevideo.com/videoplayback?expire=1658148855&ei=lwPVYuzVFMfzhwbi84mQBA&ip=3.83.114.87&id=o-AE7y_LM54_F4jv4od9hfWYIsLWfdYxs-w0L-epuPG-gN&itag=247&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278&source=youtube&requiressl=yes&mh=WS&mm=31%2C26&mn=sn-ab5l6nzd%2Csn-5uaeznl6&ms=au%2Conr&mv=u&mvi=4&pl=23&spc=lT-KhirrIizHIie2rITBQVdTtiq5kGSMyvgkfttKYHzE&vprv=1&mime=video%2Fwebm&ns=IZOVm-_IR_DFERMD1NZMGW0H&gir=yes&clen=49212908&dur=418.299&lmt=1657855128017280&mt=1658126961&fvip=4&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5437434&n=2F5UduML55L1kw&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAO4fKmi3luaxfyl-WozdlqiILxkzTSlxmXLVNVEGlZKtAiB98vTXyxeCeAHlz_QsoPyScE-d9LRqIlzVJ5CQXnbTWg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRQIhAOI7_Zm4VEBTFvTbtr0Z1Mi0jPTmo_XnocIrXvYOZP7sAiAaJY5hCzOrcqQ2KvNsAghLs9h1vNq9_xi5CZ2MoJARkw%3D%3D&range=0-"
    );
  }

  const videoItem = await youTubeDownloader(message.text);
});
