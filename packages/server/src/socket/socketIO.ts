let io: any
let socket: any

class SocketIOServices {
    static initSocketIO = (server: any) => {
        console.log('>>-----> socket initial')
        io = require('socket.io')(server, {transports: ['websocket']})

        io.on('connection', (resSocket: any) => {
            socket = resSocket
        })

        return io
    }

    static emitMessage = (type: string, message?: any) => {
        socket.emit(message.to, JSON.stringify({
            type: type,
            message: message.message || '',
            data: message.data
        }))
    }

    /**
     * If any settings changed, notify the frontend to refresh
     * @param: type: districts, users, race/ethnic, gender, survey year
     */
    static emitSettingsMessage = (type: string) => {
        let settings = ['district', 'gender_type', 'race_type', 'school', 'survey_year', 'users', 'user_type']
        if (settings.indexOf(type) > -1) {
            socket.emit('settings.updated', type)
        }
    }
}

export default SocketIOServices