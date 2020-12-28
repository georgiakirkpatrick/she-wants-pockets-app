import React from 'react'
import FormCheckboxSection from '../FormCheckboxSection/FormCheckboxSection'
import FormPage from '../FormPage/FormPage'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import NPFFooter from '../NPFFooter/NPFFooter'
import './NPFFabricsQuestion.css'

const NPFFabricsQuestion = props => {
    const primCheckOption = [
        {
            text: 'Yes',
            id: 'primary-fabric',
            checked: props.primCheck
        }
    ]
    
    const secCheckOption = [
        {
            text: 'Yes',
            id: 'secondary-fabric',
            checked: props.secCheck
        }
    ]
    
    const linCheckOption = [
        {
            text: 'Yes',
            id: 'lining-fabric',
            checked: props.linCheck
        }
    ]

    return (
        <div id='fabric-question'>
            <FormPage title='Fabrics'>
                <FormPromptWithSub 
                    prompt='The primary fabric (or material) is the main fabric used in the garment or accessory.'
                />

                <FormCheckboxSection 
                    prompt='The primary fabric (or material) is required.'
                    options={primCheckOption}
                    check={{'primary-fabric': props.primCheck}}
                    change={() => props.setPrimCheck(props.primCheck)}
                />

                <FormPromptWithSub 
                    prompt='Garments and accessories sometimes include secondary fabrics as trims or accents.'
                />

                <FormCheckboxSection 
                    prompt='Does this product include a secondary fabric?'
                    options={secCheckOption}
                    check={{'secondary-fabric': props.secCheck}}
                    change={() => props.setSecCheck(!props.secCheck)}
                />

                <FormPromptWithSub 
                    prompt='Garments and accessories sometimes include lining fabrics - an inner layer of fabric on the interior of the product.'
                />

                <FormCheckboxSection 
                    prompt='Does this product include a lining fabric?'
                    options={linCheckOption}
                    check={{'lining-fabric': props.linCheck}}
                    change={() => props.setLinCheck(!props.linCheck)}
                />
            </FormPage>
            <NPFFooter buttons='prevNext' previousButton={() => props.setPage(props.currentPage - 1)} nextButton={() => props.setPage(props.currentPage + 1)} />
        </div>
    )    
}

export default NPFFabricsQuestion