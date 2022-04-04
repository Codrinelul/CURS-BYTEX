
import React from 'react';

class Filters extends React.Component {

    // constructor(props) {
    //     super(props);
    //     // console.log("props");
    //     // console.log(this.props.data);
    //     // this.state = {
    //     //     showBook: true,
    //     //     imgsrc: String
    //     // }
    // }
    render() {
        return (
            <>
                <div className="filter__container noselect">

                    <div className="filter__items">
                        <div>
                            Type
                        </div>
                        <select value={this.props.valuetype} onChange={this.props.typesSelect}>
                            {this.props.types.map((type) => (
                                <option
                                    key={type}
                                    value={type}>{type}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="filter__items">
                        <div>
                            Sort by
                        </div>
                        <select value={this.props.sorttype} onChange={this.props.sortSelect}>
                            {this.props.sortby.map((sort) => (
                                <option
                                    key={sort}
                                    value={sort}>{sort}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="filter__items">
                        <label>
                            Search
                        </label>
                        <input type="text" value={this.props.valuesearch} onChange={this.props.searchChange} />
                    </div>
                </div>
            </>
        )
    }
}

export default Filters;