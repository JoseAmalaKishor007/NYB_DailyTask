 let values = [
            true,
            false,
            1,
            0,
            "Hello",
            "",
            null,
            undefined,
            NaN
        ];

        for(let i = 0; i < values.length; i++) {

            if(values[i]) {
                console.log(values[i], "=> Truthy");
            }
            else {
                console.log(values[i], "=> Falsy");
            }

        }
