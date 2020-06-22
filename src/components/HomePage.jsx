import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Form, Button, Image, InputGroup, FormControl, Tabs, Tab } from 'react-bootstrap';
import './HomePage.css';
import Apperance from './Apperance';
import Biography from './Biography';
import Connections from './Connections';
import Work from './Work';
import Powerstats from './Powerstats';




class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            image: null,
            superhero: '',
            superheroAPI: '',
            fullName: '',
            aliases: [],
            alignment: '',
            alterEgos: '',
            firstApperance: '',
            publisher: '',
            placeOfBirth: '',
            eyeColor: '',
            gender: '',
            hairColor: '',
            height: [],
            race: '',
            weight: [],
            groupAffiliation: [],
            relatives: [],
            base: '',
            occupation: '',
            combat: '',
            durability: '',
            intelligence: '',
            power: '',
            speed: '',
            strength: '',
            bgColor: '',
            width: window.innerWidth
        }



    }

    componentDidMount() {
        window.addEventListener('resize', this.windowResize.bind(this))
    }

    testFunction() {
        alert('hi')
    }


    windowResize() {
        this.setState({
            width: window.innerWidth
        })
    }

    superheroFetch = async () => {

        let url = `https://superhero-search.p.rapidapi.com/?hero=${this.state.superhero}`;
        let reponse = await fetch(url, {
            "headers": {
                "x-rapidapi-host": "superhero-search.p.rapidapi.com",
                "x-rapidapi-key": "2496fa6213msh5b286d3f657429cp173040jsn13b456d4488f"
            }
        })
        let data = await reponse.json();


        let tempArr = await data.biography.aliases.join(', ')
        let heightArr = await data.appearance.height.join(', ')
        let weightArr = await data.appearance.weight.join(', ')
        // groupAffiliationArr = await data.connections.groupAffiliation.join(', ')
        // let relativesArr = await data.connections.relatives.join(', ')

        this.setState({
            image: data.images.lg,
            superheroAPI: data.name,
            fullName: data.biography.fullName,
            aliases: tempArr,
            alignment: data.biography.alignment,
            alterEgos: data.biography.alterEgos,
            firstApperance: data.biography.firstApperance,
            publisher: data.biography.publisher,
            placeOfBirth: data.biography.placeOfBirth,
            eyeColor: data.appearance.eyeColor,
            gender: data.appearance.gender,
            hairColor: data.appearance.hairColor,
            height: heightArr,
            race: data.appearance.race,
            weight: weightArr,
            groupAffiliation: data.connections.groupAffiliation,
            relatives: data.connections.relatives,
            base: data.work.base,
            occupation: data.work.occupation,
            combat: data.powerstats.combat,
            durability: data.powerstats.durability,
            intelligence: data.powerstats.intelligence,
            power: data.powerstats.power,
            speed: data.powerstats.speed,
            strength: data.powerstats.strength,
            bgColor: 'container-bg-color'
        })

        console.log(data);


    }


    render() {
        return (
            <div className="bg-color">


                <Container className={this.state.bgColor}>


                    <Row>

                        <Col>
                            <div className='div-super-small lg-mt'>
                                <InputGroup>
                                    <FormControl
                                        placeholder="Superhero"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        onChange={(text) => this.setState({ superhero: text.target.value })}
                                    />
                                    <InputGroup.Append>
                                        <Button variant="outline-secondary" className="btn-color" onClick={() => this.superheroFetch()}>Search</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </div>
                        </Col>


                    </Row>

                    {this.state.strength !== '3' &&
                        <div>
                            <Row>

                                <Col xs={12}>
                                    <div className="img-center">
                                        <Image src={this.state.image} className="img-super" rounded></Image>
                                    </div>
                                </Col>


                            </Row>

                            <Row>

                                <Col xs={12} xs={{ order: 'first' }} md={6} lg={4}>
                                    <div className="div-super-small">
                                        {this.state.width < 600 &&
                                            <h4>{this.state.superheroAPI}</h4>
                                        }
                                    </div>

                                </Col>

                                {this.state.width > 800 &&

                                    <Col xs={12} md={6} lg={8} style={{ marginTop: '-400px' }}>
                                        <div>
                                            <Tabs defaultActiveKey="Biography" id="uncontrolled-tab-example" className="nav-tabs" style={{ marginTop: '10px', }}>

                                                <Tab eventKey="Biography" title="Biography">
                                                    {Biography(this.state.fullName, this.state.placeOfBirth, this.state.alignment, this.state.aliases, this.state.alterEgos, this.state.firstApperance, this.state.publisher)}
                                                </Tab>
                                                <Tab eventKey="Apperance" title="Apperance">
                                                    {Apperance(this.state.eyeColor, this.state.gender, this.state.height, this.state.hairColor, this.state.race, this.state.weight)}
                                                </Tab>
                                                <Tab eventKey="Connections" title="Connections">
                                                    {Connections(this.state.groupAffiliation, this.state.relatives)}
                                                </Tab>
                                                <Tab eventKey="Work" title="Work">
                                                    {Work(this.state.base, this.state.occupation)}
                                                </Tab>
                                                <Tab eventKey="Powerstats" title="Powerstats">
                                                    {Powerstats(this.state.combat, this.state.durability, this.state.intelligence, this.state.power, this.state.speed, this.state.strength)}
                                                </Tab>

                                            </Tabs>
                                        </div>
                                    </Col>

                                }


                            </Row>

                            {this.state.width < 800 &&
                                <Tabs defaultActiveKey="Biography" id="uncontrolled-tab-example" className="nav-tabs" style={{ marginTop: '10px', }}>

                                    <Tab eventKey="Biography" title="Biography">
                                        {Biography(this.state.fullName, this.state.placeOfBirth, this.state.alignment, this.state.aliases, this.state.alterEgos, this.state.firstApperance, this.state.publisher)}
                                    </Tab>
                                    <Tab eventKey="Apperance" title="Apperance">
                                        {Apperance(this.state.eyeColor, this.state.gender, this.state.height, this.state.hairColor, this.state.race, this.state.weight)}
                                    </Tab>
                                    <Tab eventKey="Connections" title="Connections">
                                        {Connections(this.state.groupAffiliation, this.state.relatives)}
                                    </Tab>
                                    <Tab eventKey="Work" title="Work">
                                        {Work(this.state.base, this.state.occupation)}
                                    </Tab>
                                    <Tab eventKey="Powerstats" title="Powerstats">
                                        {Powerstats(this.state.combat, this.state.durability, this.state.intelligence, this.state.power, this.state.speed, this.state.strength)}
                                    </Tab>

                                </Tabs>
                            }

                        </div>

                    }


                </Container>



            </div>
        );
    }
}

export default HomePage;