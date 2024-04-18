function checkseason(month)
        {
            if(month=="january" || month=="february" || month=="december")
            {
                console.log("winter")
            }
            else if(month=="march" || month=="april" || month=="may")
            {
                console.log("spring")
            }
            else if(month=="june" || month=="july" || month=="august")
            {
                console.log("summer")
            }
            else if(month=="september" || month=="october" || month=="november")
            {
                console.log("autumn")
            }
        }
        let month="january";
        checkseason(month);