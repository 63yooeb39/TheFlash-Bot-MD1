//*رد بوت الدسوقي 

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^ياسكونر$/i.test(m.text)) { 
     responses = [ 
 'هيحح شو بدك مني 😩❤‍🔥*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*♥🐥وعليكم السلام*',  
     ]; 
   }else if (/^بخير|بخير الحمد لله $/i.test(m.text)) { 
     responses = [ 
'*دايما يارب 💎🩵*'
     ]; 
 }else if (/^كداب|بارد$/i.test(m.text)) { 
     responses = [ 
'*مظلوم اككيد🤣❤‍🔥*'
     ]; 
   }else if (/^احا$/i.test(m.text)) { 
     responses = [ 
'*بي التيكت بتعها🙂*'
   ]; 
   }else if (/^لو$/i.test(m.text)) { 
     responses = [ 
'*انط عليك العو😁*'
]; 
   }else if (/^خاص|بف$/i.test(m.text)) { 
     responses = [ 
'*عاوز تشقطها ي لاايم🙁*',
'*مش كده طيب😝*',
'*ممكن اخش معاكو🥹*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*هالو🌚♥*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*بحبك اكتر🌚❤*',  

     ]; 
   } else if (/^عرص|ي عرص|شرموط|ي شرموط|لبوه|ي لبوه$/i.test(m.text)) { 
     responses = [ 
'*صلي علي النبي ي حب م كده 👳🏻‍♂️*'
     ]; 
     }else if (/^🌚|😉|🥹$/i.test(m.text)) { 
     responses = [ 
       '😘',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       '🌚♥اكيد',  

     ];
     }else if (/^اه$/i.test(m.text)) { 
     responses = [ 
       '*الشارع الوراه​​​​​❣️*',  

     ];
     }else if (/^بكرهك$/i.test(m.text)) { 
     responses = [ 
       '*طيب 🐦💔*',  

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*اهلا♥*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^صباحو|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباحو اللبن ي لبن♥*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^.menu$/i.test(m.text)) { 
     responses = [ 
       '*غلط اكتب .اوامر*',  
     ];
            }else if (/^خخخخ$/i.test(m.text)) { 
     responses = [ 
       '*خوخ ومنجا وسوق العبور♥*',  
     ];
    }else if (/^تنصيب|.تنصيب|kiss$/i.test(m.text)) { 
     responses = [ 
        '*استنا ي هكر بتحمل💋*' ,  
     ];
    }else if (/^اسكت$/i.test(m.text)) { 
     responses = [ 
        '*مش بمزاجك بلص اسكت انت ☺️❤️*' ,  
     ];
    }else if (/^هنيك|هتتناك|يبن الشرموطه|يبن ال لبوه$/i.test(m.text)) { 
     responses = [ 
        '*استغفرالله حرام يبني هتخش النار*' ,  
     ];
    }else if (/^ملل$/i.test(m.text)) { 
     responses = [ 
         '*بص انا عارف انك مبضون وانا برضو مبضون و مطوري برضو مبضون بس نعمل ايه هي الدنيا بضان كده ايه الجديد 🙂💔*'  ,  
     ];
    }else if (/^وحشتني|واحشتني$/i.test(m.text)) { 
     responses = [ 
         '*انت اكتر عمتا 🥹💘*'  ,  
     ];
    }else if (/^.اسكونر$/i.test(m.text)) { 
     responses = [ 
         '*اسكت اسكونر مبضون خلقه😞*'  ,  
     ];
    }else if (/^حبوني$/i.test(m.text)) { 
     responses = [ 
         '*بحبك عمتا 🥹💗*'  ,  
     ];
     }else if (/^كلموني$/i.test(m.text)) { 
     responses = [ 
         '*تعي بف 🫦❤️‍🔥*'  ,  
     ];
    }else if (/^بوت احتاويني|بوت احتاويني|احتاويني|احتويني$/i.test(m.text)) { 
     responses = [ 
         '*تعي في حضني ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​🥹​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​❣️*'  ,  
     ];
    }else if (/^بموت فيك$/i.test(m.text)) { 
     responses = [ 
         '*بدمنك 🥺❤️*'  ,  
     ];
    }else if (/^بعشقك$/i.test(m.text)) { 
     responses = [ 
         '*قلبي اصلا ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​🌚❤️*'  ,  
     ];
    }else if (/^بدمنك$/i.test(m.text)) { 
     responses = [ 
         '*ي بختي اصلا 🥺❤️✨*'  ,  
     ];
    }else if (/^كسمك$/i.test(m.text)) { 
     responses = [ 
         '*ربنا يسمحك😒*'  ,  
     ];
    }else if (/^حبوني$/i.test(m.text)) { 
     responses = [ 
         '*بحبك و بموت فيك و بدمنك و بعشقك ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​🥹​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​❣️*'  ,  
     ];
    }else if (/^رول|ادمن$/i.test(m.text)) { 
     responses = [
         '*بوس رفاعي الاول🥺*'  ,  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
