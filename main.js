const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
    run: ['01-01', '01-02', '06-01'],
    water: ['01-01', '01-03', '01-04'],
    food: ['01-01', '01-02', '06-01'],
    journal: ['01-01', '01-02', '06-01'],
    takePills: ['01-01', '01-02', '05-01'],
}

nlwSetup.setData(data)
nlwSetup.load()