import React,{Component} from 'react'
import ReactAutocomplete from 'react-autocomplete'
import {RANDOM_FOODS} from '../../constants';
class AutoComplete extends Component {

    constructor (props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    render() {
        return (
            <ReactAutocomplete
                items={RANDOM_FOODS}
                shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={item => item.name}
                renderItem={(item, highlighted) =>
                    <div
                        key={item.name}
                        style={{backgroundColor: highlighted ? '#eee' : 'transparent'}}
                    >
                        {item.name}
                    </div>
                }
                value={this.state.value}
                onChange={e => this.setState({ value: e.target.value })}
                onSelect={value => this.setState({ value })}
            />
        )
    }
}

export default AutoComplete;