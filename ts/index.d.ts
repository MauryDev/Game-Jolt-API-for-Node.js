declare module "game-jolt-api" {
    interface Users {
        id: string
        type: string
        username: string
        avatar_url: string
        signed_up: string
        signed_up_timestamp: number
        last_logged_in: string
        last_logged_in_timestamp: number
        status: string
        developer_name: string
        developer_website: string
        developer_description: string
    }
    interface Tables {
        id: string
        name: string
        description: string
        primary: string
    }
    interface ResponseAPI {
        message: string
        success: boolean
    }
    interface Scores {
        score: string
        sort: string
        extra_data: string
        user: string
        user_id: string
        guest: string
        stored: string
        stored_timestamp: number
    }
    interface Trophies {
        id: string
        title: string
        description: string
        difficulty: "Bronze" | "Silver" | "Gold" | "Platinum"
        image_url: string
        achieved: string | boolean
    }
    type operation = "add" | "subtract" | "multiply" | "divide" | "append" | "prepend"
    type methods = "AddScoreGuest"|"AddScoreUser"|"GetRank"|"GetTables"|"FetchScores"|"GetFriends"|"GetTime"|"AuthUser"|"FetchUsers"|"OpenSession"|"PingSession"|"AddAchieved"|"CheckSession"|"CloseSession"|"RemoveAchieved"|"FetchTrophies"|"FetchDataStore"|"GetKeysDataStore"|"RemoveDataStore"|"SetDataStore"|"Batch"|"UpdateDataStore"
    interface Tools {
        AddScoreGuest: (score: string, sort: number, table_id: number, guest: string, extra_data: string, callback: (response: ResponseAPI) => any) => void
        AddScoreUser: (score: string, sort: number, table_id: number, user: string, user_token: string, extra_data: string, callback: (response: ResponseAPI) => any) => void
        GetRank: (sort: number, table_id: number, callback: (response: ResponseAPI & { rank: number }) => any) => void
        GetTables: (callback: (response: ResponseAPI & { tables: Tables[] }) => any) => void
        FetchScores: (limit: number, table_id: number, username: string, user_token: string, guest: string, better_than: number, worse_than: number, callback: (response: ResponseAPI & { scores: Scores[] }) => any) => void
        GetFriends: (username: string, user_token: string, callback: (response: ResponseAPI & { friends: { friend_id: number }[] }) => any) => void
        AuthUser: (username: string, user_token: string, callback: (response: ResponseAPI) => any) => void
        FetchUsers: (username: string, user_id: number, callback: (response: ResponseAPI & { users: Users[] }) => any) => void
        OpenSession: (username: string, user_token: string, callback: (response: ResponseAPI) => any) => void
        PingSession: (username: string, user_token: string, status: "active" | "idle", callback: (response: ResponseAPI) => any) => void
        AddAchieved: (username: string, user_token: string, trophy_id: number, callback: (response: ResponseAPI) => any) => void
        CheckSession: (username: string, user_token: string, callback: (response: ResponseAPI) => any) => void
        CloseSession: (username: string, user_token: string, callback: (response: ResponseAPI) => any) => void
        RemoveAchieved: (username: string, user_token: string, trophy_id: number, callback: (response: ResponseAPI) => any) => void
        FetchTrophies: (username: string, user_token: string, trophy_id: number, achieved: boolean, callback: (response: ResponseAPI & { trophies: Trophies[] }) => any) => void
        FetchDataStore: (key: string, username: string, user_token: string, callback: (response: ResponseAPI & { data: string }) => any) => void
        GetKeysDataStore: (pattern: string, username: string, user_token: string, callback: (response: ResponseAPI & { key: string }) => any) => void
        RemoveDataStore: (key: string, username: string, user_token: string, callback: (response: ResponseAPI) => any) => void
        SetDataStore: (key: string, data: string, username: string, user_token: string, callback: (response: ResponseAPI) => any) => void
        UpdateDataStore: (key: string, username: string, user_token: string, operation: operation, value: string | number, callback: (response: ResponseAPI & { data: string }) => any) => void
        Batch: (callback: (AddBatch: (method: methods,...args: any) => void) => any) => () => void
    }
    var c: Tools
    function Config(key: string, game_id: number): Tools
    export = Config
}