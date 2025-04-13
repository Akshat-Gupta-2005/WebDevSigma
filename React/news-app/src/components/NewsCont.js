import React, { Component } from 'react'
import Card from './Card'

export class NewsCont extends Component {
    articles = []

    constructor() {
        super()
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalarticles: 0,
            pageSize: 18
        };
    }

    fetchArticles = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a90249121eea40eaacca5190509e94c3&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parsedata = await data.json();
        // console.log(parsedata);
        this.setState({ articles: parsedata.articles, totalarticles: parsedata.totalResults });
    };

    prev = async () => {
        this.setState((prevState) => ({ page: prevState.page - 1 }), this.fetchArticles);
    };

    next = async () => {
        this.setState((prevState) => ({ page: prevState.page + 1 }), this.fetchArticles);
    };


    async componentDidMount() {
        this.fetchArticles()
    }

    render() {
        return (
            <div>
                <div className='container my-3 w-75 '>
                    <h2 className='text-center'>NewNews - top headlines</h2>
                    <div className="row bg-dark">

                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <Card title={element.title ? element.title.slice(0, 45) : ""} desc={element.description ? element.description.slice(0, 90) : ""} imgurl={element.urlToImage} newsurl={element.url ? element.url : ""} />
                            </div>
                        })}

                    </div>
                    <div className="container d-flex justify-content-between" role="group" aria-label="Basic example">
                        <button disabled={this.state.page <= 1} onClick={this.prev} type="button" className="btn btn-dark m-2 p-2 ">Prev</button>
                        <button disabled={this.state.page >= Math.ceil(this.state.totalarticles / this.state.pageSize)} onClick={this.next} type="button" className="btn btn-dark m-2 p-2 ">Next</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default NewsCont
