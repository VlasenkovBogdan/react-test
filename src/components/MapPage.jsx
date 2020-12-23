import React from 'react';
import myMap from './myMap.svg';
import marker from './marker.png';
import ExitButton from './exitButton';
import RemoveButton from './removeButton';
import InfoField from './InfoField';
import ReactTooltip from 'react-tooltip';




class MyMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xcor: '',
            ycor: '',
            name: "",
            amount: "",
            index: "",
            changedValue: "",
            data: [
                {
                    "name": "vaizdas",
                    "amount": 780,
                    "x": 37.482919613830745,
                    "y": 16.051401966251433
                },
                {
                    "name": "દૃશ્ય",
                    "amount": 50,
                    "x": 0.8770242799073458,
                    "y": 92.97660256270319
                },
                {
                    "name": "Бознигарии",
                    "amount": 650,
                    "x": 28.146877679893972,
                    "y": 61.377245508982035
                },
                {
                    "name": "राय",
                    "amount": 310,
                    "x": 64.93268613703549,
                    "y": 36.827798443846405
                },
                {
                    "name": "vyhlídka",
                    "amount": 110,
                    "x": 5.52747577894479,
                    "y": 49.823843548074365
                },
                {
                    "name": "전망",
                    "amount": 110,
                    "x": 61.03445629123598,
                    "y": 39.15472705848515
                },
                {
                    "name": "vaade",
                    "amount": 650,
                    "x": 49.91975009907037,
                    "y": 59.59253190085292
                },
                {
                    "name": "goo.gl/2xofqM",
                    "amount": 520,
                    "x": 86.42394948156233,
                    "y": 32.13572854291417
                },
                {
                    "name": "görünüm",
                    "amount": 350,
                    "x": 19.39234142191708,
                    "y": 26.89329779241234
                },
                {
                    "name": "pogled",
                    "amount": 700,
                    "x": 57.22799787763506,
                    "y": 14.101785491220653
                },
                {
                    "name": "տեսարան",
                    "amount": 510,
                    "x": 56.38730802214079,
                    "y": 41.417165668662676
                },
                {
                    "name": "выгляд",
                    "amount": 300,
                    "x": 82.23279020815467,
                    "y": 53.69261477045908
                },
                {
                    "name": "vue",
                    "amount": 960,
                    "x": 34.23403757698604,
                    "y": 1.996007984031936
                },
                {
                    "name": "харах",
                    "amount": 790,
                    "x": 29.840374924242496,
                    "y": 38.309490121901035
                },
                {
                    "name": "ดู",
                    "amount": 150,
                    "x": 39.64179700706154,
                    "y": 27.720050793141127
                },
                {
                    "name": "umbono",
                    "amount": 870,
                    "x": 34.33382708349575,
                    "y": 68.6626746506986
                },
                {
                    "name": "panglantaw",
                    "amount": 380,
                    "x": 32.33803695330163,
                    "y": 19.06187624750499
                },
                {
                    "name": "mtazamo",
                    "amount": 480,
                    "x": 21.655641682446003,
                    "y": 57.70890084095299
                },
                {
                    "name": "tampilan",
                    "amount": 950,
                    "x": 34.406534931622446,
                    "y": 57.49301293399185
                },
                {
                    "name": "view",
                    "amount": 920,
                    "x": 42.992035183124244,
                    "y": 64.3841493409127
                },
                {
                    "name": "utsikt",
                    "amount": 370,
                    "x": 55.18983394402432,
                    "y": 47.80439121756487
                },
                {
                    "name": "widok",
                    "amount": 550,
                    "x": 48.46163943875581,
                    "y": 55.754911503754556
                },
                {
                    "name": "echiche",
                    "amount": 600,
                    "x": 30.514893331564963,
                    "y": 93.29693901818246
                },
                {
                    "name": "поглед",
                    "amount": 500,
                    "x": 17.784739728085697,
                    "y": 61.40281553380191
                },
                {
                    "name": "көрініс",
                    "amount": 720,
                    "x": 25.613603345118463,
                    "y": 29.345147358253598
                },
                {
                    "name": "vista",
                    "amount": 830,
                    "x": 5.546023300848901,
                    "y": 99.85712959896773
                },
                {
                    "name": "útsýni",
                    "amount": 160,
                    "x": 7.590239338894519,
                    "y": 26.746506986027946
                },
                {
                    "name": "Ansicht",
                    "amount": 310,
                    "x": 68.50945868063718,
                    "y": 24.147137184627354
                },
                {
                    "name": "uitzicht",
                    "amount": 900,
                    "x": 51.89678022920402,
                    "y": 44.91017964071856
                },
                {
                    "name": "вид",
                    "amount": 80,
                    "x": 12.180556638340999,
                    "y": 61.17764471057884
                },
                {
                    "name": "oog",
                    "amount": 550,
                    "x": 66.166679660092,
                    "y": 61.17764471057884
                },
                {
                    "name": "ikuspegi",
                    "amount": 160,
                    "x": 29.430025373585522,
                    "y": 20.536808390170336
                },
                {
                    "name": "nānaina",
                    "amount": 870,
                    "x": 74.3878633249551,
                    "y": 14.184071798808873
                },
                {
                    "name": "maonero",
                    "amount": 410,
                    "x": 38.649352081120014,
                    "y": 52.4458370404318
                },
                {
                    "name": "fehma",
                    "amount": 850,
                    "x": 19.56498012005925,
                    "y": 9.780439121756487
                },
                {
                    "name": "vedere",
                    "amount": 650,
                    "x": 2.254082844592631,
                    "y": 52.254996029660106
                },
                {
                    "name": "pono",
                    "amount": 360,
                    "x": 32.25988743361086,
                    "y": 32.36382636241615
                },
                {
                    "name": "goo.gl/B3GXYo",
                    "amount": 30,
                    "x": 47.90519996881578,
                    "y": 17.465069860279442
                },
                {
                    "name": "ビュー",
                    "amount": 980,
                    "x": 21.12881091888994,
                    "y": 52.35764703247696
                },
                {
                    "name": "視圖",
                    "amount": 120,
                    "x": 43.01551414984018,
                    "y": 24.251497005988025
                },
                {
                    "name": "skats",
                    "amount": 410,
                    "x": 53.293833320339914,
                    "y": 40.7185628742515
                },
                {
                    "name": "goo.gl/jUwXfD",
                    "amount": 570,
                    "x": 15.872768379200124,
                    "y": 59.2814371257485
                },
                {
                    "name": "test",
                    "amount": 1337,
                    "x": 100,
                    "y": 100
                }
            ]
        };
        this.handleMouseClick = this.handleMouseClick.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.removeMarkOnClick = this.removeMarkOnClick.bind(this)
        this.removeButton = this.removeButton.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }
    handleMouseClick(event) {
        this.setState({
            xcor: event.nativeEvent.offsetX,
            ycor: event.nativeEvent.offsetY
        });
        let amount = +prompt('Введите количество товара?')
        let name = prompt('Введите имя точки?')
        if (name === '' || name === null || amount === '' || amount === null || isNaN(amount)) {
            alert('Вы ввели данные неверно')
        } else {
            this.setState({
                name: name,
                amount: amount
            })
            let obj = {
                "name": name,
                "amount": amount,
                "x": event.nativeEvent.offsetX / 10,
                "y": event.nativeEvent.offsetY / 10
            }
            this.state.data.push(obj)
            localStorage.setItem('obj', JSON.stringify(this.state.data))
        }


    }
    handleMouseOver(e) {

        this.state.data.forEach((elem, index) => {
            if (e.target.id === elem.x.toString() + elem.y.toString()) {
                this.setState({
                    amount: elem.amount,
                    xcor: elem.x,
                    ycor: elem.y,
                    name: elem.name,
                    index: index,
                })
            }
        });

    }

    removeMarkOnClick(e) {
        this.state.data.forEach((elem, index) => {
            if (e.target.id === elem.x + elem.y.toString()) {
                let obj = this.state.data;
                obj.splice(index, 1)
                this.setState({ data: obj });
                localStorage.setItem('obj', JSON.stringify(this.state.data))
            }
        });

    }
    componentDidMount() {
        if (localStorage.getItem('obj')) {
            this.setState({ data: JSON.parse(localStorage.getItem('obj')) })
        }

    }
    componentDidUpdate() {
        ReactTooltip.rebuild()
    }

    renderMarks() {

        return (
            <div>
                <div>{this.state.data.map((e) =>
                    <img src={marker}
                        alt="marker"
                        key={e.x.toString() + e.y.toString()}
                        id={e.x.toString() + e.y.toString()}
                        data-tip data-for='tooltip'
                        style={{ left: e.x * 10 - 3 + "px", top: e.y * 10 - 16 + "px", position: "absolute" }}
                        className='marker'
                        onMouseOver={this.handleMouseOver}
                        onClick={this.removeMarkOnClick} />
                )}</div>

            </div>
        )



    }
    removeButton() {

        localStorage.removeItem('obj')
        let obj = this.state.data;
        obj.splice(0, obj.length)
        this.setState({ data: obj });
        localStorage.setItem('obj', JSON.stringify(this.state.data))
    }
    handleChange(e) {
        let index = this.state.index;
        let changedValue = e.target.value;
        if (e.target.id === 'amount') {
            if (isNaN(+e.target.value)) {
                alert('вы ввели не число')
            } else {
                this.setState({ amount: e.target.value })
                this.state.data.find(function (elem, elemIndex) {
                    if (elemIndex === index) {
                        elem.amount = +changedValue
                    }

                })
            };
        } else if (e.target.id === 'posName') {
            this.setState({ name: e.target.value })
            this.state.data.find(function (elem, elemIndex) {
                if (elemIndex === index) {
                    elem.name = changedValue
                }

            });
        } else if (e.target.id === 'xPos') {
            if (isNaN(+e.target.value)) {
                alert('вы ввели не число')
            } else {
                this.setState({ xcor: e.target.value })
                this.state.data.find(function (elem, elemIndex) {
                    if (elemIndex === index) {
                        elem.x = +changedValue
                    }
                    if (elem.x >= 100) {
                        elem.x = 100
                    } else if (elem.x <= 0) {
                        elem.x = 0
                    }
                })
            };
        } else if (e.target.id === 'yPos') {
            if (isNaN(+e.target.value)) {
                alert('вы ввели не число')
            } else {
                this.setState({ ycor: e.target.value })
                this.state.data.find(function (elem, elemIndex) {
                    if (elemIndex === index) {
                        elem.y = +changedValue
                    }
                    if (elem.y >= 100) {
                        elem.y = 100
                    } else if (elem.y <= 0) {
                        elem.y = 0
                    }
                })
            };

        }
        localStorage.setItem('obj', JSON.stringify(this.state.data))
    }
    render() {
        return (
            <div className='mapPage'>

                <div className='infoField'>
                    <InfoField
                        changedData={this.handleChange}
                        xcor={this.state.xcor}
                        ycor={this.state.ycor}
                        name={this.state.name}
                        amount={this.state.amount}
                    />
                </div>
                <div>
                    <div className='mapField'  >
                        {this.renderMarks()}
                        <img src={myMap} alt="myMap" key="mainMap" className='map' id='map' onClick={this.handleMouseClick} />

                    </div>
                    <div>
                        <ExitButton />
                        <RemoveButton remove={this.removeButton} />
                        <ReactTooltip id='tooltip' place="top" effect="solid">
                        name: {this.state.name}
                            <br />
                        amount: {this.state.amount}
                        </ReactTooltip>
                    </div>
                </div>
            </div>
        )
    }
}





export default MyMap