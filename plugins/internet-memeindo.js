import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/meme/memeindo?apikey=ffc7159b6004dbfad13a3175'
	conn.sendButton(m.chat, 'Mim Indo :v', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(meme)$/i
handler.tags = ['internet']
handler.help = ['meme']

export default handler
