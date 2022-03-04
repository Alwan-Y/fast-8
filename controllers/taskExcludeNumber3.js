const axios = require ('axios')

const fibonaci = async (req, res) => {
    let { n } = req.body
    parseInt(n)

    if (!n) {
        return res.status(404).json({
            succes: false,
            kode: 500,
            msg: 'n is required'
        })
    }

    let n1 = 0
    let n2 = 1

    let nextN = n1 + n2
    let display = [0, 1]

    while(nextN < n) {
        console.log(n2)
        console.log(nextN)
        n1 = n2
        n2 = nextN
        nextN = n1 + n2
        display.push(n2)
    }

    return res.status(200).json({
        succes: true,
        kode: 200,
        msg: display
    })
}

const loopForCombination = ( val ) => {
    let valBefore = 1
    let valAfter 
    for ( let i = 1; i <= val; i++ ) {
        if ( !valAfter ) {
            valAfter = valBefore * i
        } else {
            valAfter = valAfter * i
        }
        console.log(`ini val i ${i}`)
        console.log(`ini val after ${valAfter}`)
    }

    return valAfter
}

const combination = async (req, res) => {
    let {n, r}  = req.body
    parseInt(n)
    parseInt(r)

    if ( n === r || r === 0 ) {
        return res.status(200).json({
            succes: true,
            kode: 200,
            msg: 1
        }
    )
    } else {
        let nBefore = n
        let rBefore = r
        n = loopForCombination(n)
        // console.log(`ini nilai n ${n}`)
        r = loopForCombination(r)
        // console.log(`ini nilai r ${r}`)


        let subtraction = nBefore - rBefore
        let subtractionFaktorial = loopForCombination(subtraction)
        // console.log(`ini nilai subtraction ${subtraction}`)
        let multiplication = r * subtractionFaktorial
        // console.log(`ini nilai multiplication ${multiplication}`)

        let result = n / multiplication

        return res.status(200).json({
                succes: true,
                kode: 200,
                msg: result
            }
        )
    }
}

const getCountries = async (req, res) => {
    try {
        const url = 'https://gist.githubusercontent.com/herysepty/ba286b815417363bfbcc472a5197edd0/raw/aed8ce8f5154208f9fe7f7b04195e05de5f81fda/coutries.json'
        const getAllData = await axios.get(url)
        const getData = getAllData.data

        const newData = []

        getData.forEach(e => {
            newData.push(
                {
                    name: e.name,
                    region: e.region,
                    timezone: e.timezones
                }
            )
        })

        return res.status(200).json({
            succes: true,
            kode: 200,
            msg: newData
        })

    } catch(error) {
        return res.status(500).json({
            succes: false,
            kode: 500,
            msg: error.message
        })
    }
}

module.exports = {
    getCountries,
    fibonaci,
    combination
}