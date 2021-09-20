

const languagesData = (data) => {
    const languagesArray = []
    data.forEach(country => {
        country.languages.forEach((element) => {
            languagesArray.push(element.name)
        })
    });
    const countAnLanguage = (languagesArray, name) => {
        let count = 0
        languagesArray.forEach(element => {
            if (element === name) {
                count++
            }
        })
        return count
    }
    const countLanguages = (languagesArray) => {
        let languagesAndCount = []

        while (languagesArray.length > 0) {
            languagesArray.forEach((element,index) => {
                let count = countAnLanguage(languagesArray, element)
                if (!languagesAndCount.filter(elementWithCount => elementWithCount.name === element).length > 0) {
                    languagesAndCount.push({
                        name: element,
                        max: count
                    })
                }
                languagesArray.forEach((languageName,index) => {
                    if (languageName === element) {
                        languagesArray.splice(index,1)
                    }
                })
            })
        }
        return languagesAndCount
    }

    const findMax = (array) => {
        let max = array[0].max 
        let name
        array.forEach((element,index) => {
            if (element.max >= max) {
                max = element.max
                name = element.name
            }
        })
        return [name,max]
    }

    const tenMostSpokenLanguages = (languagesAndCount) => {
        const tenMostSpokenLanguages = []
        while (languagesAndCount.length > 0) {
            console.log(languagesAndCount)
            languagesAndCount.forEach((element,index) => {
                if (element.name === findMax(languagesAndCount)[0] && element.max === findMax(languagesAndCount)[1]) {
                    tenMostSpokenLanguages.push({
                        name: element.name,
                        max: findMax(languagesAndCount)[1]
                    })
                    languagesAndCount.splice(index,1)
                }
            })
        }
        while (tenMostSpokenLanguages.length > 10) {
            tenMostSpokenLanguages.pop()
        }
        return tenMostSpokenLanguages
    }
    return tenMostSpokenLanguages(countLanguages(languagesArray))
}

export default languagesData