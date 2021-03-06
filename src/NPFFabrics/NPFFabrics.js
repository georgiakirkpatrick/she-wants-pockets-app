import React from 'react'
import config from '../config'
import FormButton from '../FormButton/FormButton'
import FormCheckboxSection from '../FormCheckboxSection/FormCheckboxSection'
import FormDropdown from '../FormDropdown/FormDropdown'
import FormFieldset from '../FormFieldset/FormFieldset'
import FormPage from '../FormPage/FormPage'
import FormPopUp from '../FormPopUp/FormPopUp'
import NPFFooter from '../NPFFooter/NPFFooter'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import FormTextInput from '../FormTextInput/FormTextInput'
import FormUrlInput from '../FormUrlInput/FormUrlInput'
import FormNumberInput from '../FormNumberInput/FormNumberInput'

const NPFFabrics = props => {
    const addCertification = certification => {
        props.fabricProps.setCertificationList([
            ...props.fabricProps.certificationList,
            {
                id: certification.id,
                name: certification.name,
                text: certification.english_name,
                website: certification.website,
                approved: certification.approved_by_admin
            }
        ])

        props.fabricProps.setInitCerts({
            ...props.fabricProps.initCerts,
            [certification.name]: false
        })
    }

    const addFactory = newFactory => {
        props.fabricProps.setFactoryList([
            ...props.fabricProps.factoryList,
            {
                id: newFactory.id,
                english_name: newFactory.english_name,
                country: newFactory.country,
                website: newFactory.website,
                notes: newFactory.notes,
                approved_by_admin: newFactory.approved_by_admin
            }
        ])
    }

    const addFiber = () => {
        const initialCertChecks = props.fabricProps.certificationList.map(c => [c.name, false])
        const initialObject = Object.fromEntries(initialCertChecks)

        props.setFiberFieldsets([
            ...props.fiberFieldsets,
            {
                fiberTypeId: 0,
                percentage: '',
                originId: 0,
                producerId: 0,
                producerNotes: '',
                certIds: initialObject
            }
        ])
    }

    const addFiberType = newFiberType => {
        props.fabricProps.setFiberTypeList([
            ...props.fabricProps.fiberTypeList,
            newFiberType
        ])
    }

    const certPopUpStatus = () => {
        if (props.fabricProps.certPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const handleClose = () => {
        props.fabricProps.setCertPopUp(false)
        props.fabricProps.setDyeFactPopUp(false)
        props.fabricProps.setFiberPopUp(false)
        props.fabricProps.setMillPopUp(false)
        props.fabricProps.setProducerPopUp(false)
    }

    const fabCertChange = event => {
        props.setCertChecks({
            ...props.certChecks, 
            [event.target.name]: !props.certChecks[event.target.name]
        })
    }

    const fabChange = event => {
        const fabFields = {...props.fabFact}
        fabFields[event.target.name] = event.target.value
        props.setFabFact(fabFields)
    }

    const factPopUpStatus = () => {
        if (props.fabricProps.dyeFactPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const fibCertChange = (fiberIndex, certName) => {
        const updatedFibers = [...props.fiberFieldsets]
    
        updatedFibers[fiberIndex].certIds[certName] = !props.fiberFieldsets[fiberIndex].certIds[certName]

        props.setFiberFieldsets(updatedFibers)
    }

    const fibChangeInput = (index, event) => {
        const values = [...props.fiberFieldsets]
        values[index][event.target.name] = Number(event.target.value)
        props.setFiberFieldsets(values)
    }

    const fibPopUpStatus = () => {
        if (props.fabricProps.fiberPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const makeCountryOptions = () => {
        const countries = props.fabricProps.countries.map((country, index) => ({
            id: index + 2,
            text: country.text,
            value: index + 2
        }))

        return [
            {
                id: 0,
                text: 'Select a country',
                value: 0
            },
            ...countries
        ]
    }

    const makeFactoryOptions = factType => {
        const factoryQty = props.fabricProps.factoryList.length
        const factories = props.fabricProps.factoryList.slice(1, factoryQty)
        const alphaFactories = factories.sort((a, b) => a.english_name > b.english_name ? 1 : -1)

        const formatedFactories = alphaFactories.map(mill => (
            {
                id: mill.id,
                text: mill.english_name,
                value: mill.id
            }
        ))

        return [
            {
                id: 0,
                text: `Select a ${factType}`,
                value: 0
            },
            {
                id: 1,
                text: 'Not disclosed',
                value: 1
            },
            ...formatedFactories
        ]
    }

    const makeFibCertList = index => {
        const fibCertList = []

        props.fabricProps.certificationList.forEach(cert => {
            fibCertList.push({
                ...cert,
                id: index + '-' + cert.id
            })
        })

        return fibCertList
    }

    const makeFiberOptions = () => {
        const fibers = props.fabricProps.fiberTypeList.map(fiberType => ({
            id: fiberType.id,
            text: fiberType.english_name,
            value: fiberType.id
        }))

        return [
            {
                id: 0,
                text: 'Select a fiber or material',
                value: 0
            },
            ...fibers
        ]
    }

    const millPopUpStatus = () => {
        if (props.fabricProps.millPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }
    
    const newCertChange = event => {
        const newCertFields = {...props.fabricProps.newCert}
        newCertFields[event.target.name] = event.target.value
        props.fabricProps.setNewCert(newCertFields)
    }

    const newFactChange = event => {
        const newFields = {...props.fabricProps.newFact}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        newFields[event.target.name] = event.target.value
        props.fabricProps.setNewFact(newFields)
    }

    const newMillChange = event => {
        const newFields = {...props.fabricProps.newMill}
        newFields[event.target.name] = event.target.value
        props.fabricProps.setNewMill(newFields)
    }

    const newProducerChange = event => {
        const newFields = {...props.fabricProps.newProducer}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        newFields[event.target.name] = event.target.value
        props.fabricProps.setNewProducer(newFields)
    }

    const nextButton = () => {
        const missingFabricFields = []

        const requiredFabFields = {
            'dyeFinCountryId': 'dyeing and finishing country',
            'dyeFinId': 'dyeing and finishing factory',
            'wovKnitCountryId': 'knitting or weaving country',
            'wovKnitId': 'knitting or weaving fabric mill'
        }

        Object.keys(requiredFabFields).forEach(key => {
            if (Number(props.fabFact[key]) === 0) {
                missingFabricFields.push(requiredFabFields[key])
            }
        })
            
        if (missingFabricFields.length === 1) {
            alert(`Please complete the '${missingFabricFields[0]}' field`)
        } else if (missingFabricFields.length > 1) {
            alert(`Please complete the following fields: ${missingFabricFields.map(field => `
                ${field}`)}
            `)
        } else if (missingFabricFields.length === 0) {
            props.fiberFieldsets.forEach(fiber => {
                if (Number(fiber.fiberTypeId) === 0) {
                    alert(`Please select an option for each 'fiber type' field.  Remove any unused fiber sections with the 'remove' button.`)
                } else if (Number(fiber.originId) === 0) {
                    alert(`Please select an option for each 'fiber origin' field.  Remove any unused fiber sections with the 'remove' button.`)
                } else if (Number(fiber.producerId) === 0) {
                    alert(`Please select an option for each 'fiber producer' field.  Remove any unused fiber sections with the 'remove' button.`)
                } else {
                    props.fabricProps.setPage(props.fabricProps.currentPage + props.pageTurns)
                }
            })
        }
    }

    // const nextButton = () => {props.fabricProps.setPage(props.fabricProps.currentPage + 1)}

    const prodPopUpStatus = () => {
        if (props.fabricProps.producerPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const removeFiber = (index) => {
        const values = [...props.fiberFieldsets]
        values.splice(index, 1)
        props.setFiberFieldsets(values)
    }

    const clearFactPopUpFields = () => {
        props.fabricProps.setNewFact({
            name: '',
            countryId: 0,
            website: '',
            notes: ''
        })

        props.fabricProps.setNewMill({
            name: '',
            countryId: 0,
            website: '',
            notes: ''
        })

        props.fabricProps.setNewProducer({
            name: '',
            countryId: 0,
            website: '',
            notes: ''
        })
    }

    const submitDyeFactory = () => {
        const data = {
            "english_name": props.formatName(props.fabricProps.newFact.name),
            "country": props.fabricProps.newFact.countryId,
            "website": props.formatUrl(props.fabricProps.newFact.website),
            "notes": props.fabricProps.newFact.notes
        }

        const postRequestParams = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        }

        const requiredFields = {
            english_name: props.fabricProps.newFact.name,
            country: props.fabricProps.newFact.countryId
        }

        const missingFields = []

        Object.keys(requiredFields).forEach(key => {
            if (requiredFields[key] === '' || requiredFields[key] === 0) {
                missingFields.push(key.replace( /([A-Z])/g, " $1" ).toLowerCase())
            }
        })

        if (missingFields.length >= 1) {
            alert(`The factory name and country fields are required.  Please complete both fields.`)
        } else {
            fetch(`${config.API_URL}/api/factories`,
                postRequestParams
            )
            .then(response => {
                if (response.status >= 400) {
                    throw new Error('Server responded with an error!')
                }
                return response.json()
            })
            .then(responseJson => {
                addFactory(responseJson)
                const fabFactory = {...props.fabFact}
                fabFactory.dyeFinId = responseJson.id
                props.setFabFact(fabFactory)
            })

            handleClose()
            clearFactPopUpFields()
        }
    }

    const submitFiber = () => {
        const data = {
            "english_name": props.fabricProps.formatName(props.fabricProps.newFiber.name)
        }

        const postRequestParams = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        }

        if (props.fabricProps.newFiber.name === '') {
            alert(`Please enter a new fiber.`)
        } else {
            fetch(`${config.API_URL}/api/fibers/fiber-types`,
                postRequestParams
            )
            .then(response => {            
                if (response.status >= 400) {
                    throw new Error('Server responded with an error!')
                }
                return response.json()
            })
            .then(responseJson => {
                addFiberType(responseJson)
            })

            props.fabricProps.setFiberPopUp(false)
            props.fabricProps.setNewFiber({
                name: ''
            })
        }
    }

    const submitFibProducer = index => {
        const data = {
            "english_name": props.fabricProps.formatName(props.fabricProps.newProducer.name),
            "country": props.fabricProps.newProducer.countryId,
            "website": props.fabricProps.formatUrl(props.fabricProps.newProducer.website),
            "notes": props.fabricProps.newProducer.notes
        }

        const postRequestParams = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        }

        const requiredFields = {
            english_name: props.fabricProps.newProducer.name,
            country: props.fabricProps.newProducer.countryId
        }

        const missingFields = []

        Object.keys(requiredFields).forEach(key => {
            if (requiredFields[key] === '' || requiredFields[key] === 0) {
                missingFields.push(key.replace( /([A-Z])/g, " $1" ).toLowerCase())
            }
        })

        if (missingFields.length >= 1) {
            alert(`The factory name and country fields are required.  Please complete both fields.`)
        } else {
            fetch(`${config.API_URL}/api/factories`,
                postRequestParams
            )
            .then(response => {
                if (response.status >= 400) {
                    throw new Error('Server responded with an error!')
                }
                return response.json()
            })
            .then(responseJson => {
                addFactory(responseJson)
                const fiberArray = [...props.fiberFieldsets]
                fiberArray[index].producerId = responseJson.id
                props.setFabFact(fiberArray)
            })

            handleClose()
            clearFactPopUpFields()
        }
    }

    const submitMill = () => {
        const data = {
            "english_name": props.fabricProps.formatName(props.fabricProps.newMill.name),
            "country": props.fabricProps.newMill.countryId,
            "website": props.fabricProps.formatUrl(props.fabricProps.newMill.website),
            "notes": props.fabricProps.newMill.notes
        }

        const postRequestParams = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        }

        const requiredFields = {
            english_name: props.fabricProps.newMill.name,
            country: props.fabricProps.newMill.countryId
        }

        const missingFields = []

        Object.keys(requiredFields).forEach(key => {
            if (requiredFields[key] === '' || requiredFields[key] === 0) {
                missingFields.push(key.replace( /([A-Z])/g, " $1" ).toLowerCase())
            }
        })

        if (missingFields.length >= 1) {
            alert(`The factory name and country fields are required.  Please complete both fields.`)
        } else {
            fetch(`${config.API_URL}/api/factories`,
                postRequestParams
            )
            .then(response => {
                if (response.status >= 400) {
                    throw new Error('Server responded with an error!')
                }
                return response.json()
            })
            .then(responseJson => {
                addFactory(responseJson)
                const newFactory = {...props.fabFact}
                newFactory.wovKnitId = responseJson.id
                props.setFabFact(newFactory)
            })

            props.fabricProps.setMillPopUp(false)
            props.fabricProps.setNewMill({
                name: '',
                countryId: 0,
                website: '',
                notes: ''
            })
        }
    }

    const submitNewCert = () => {
        const missingFields = []

        Object.keys(props.fabricProps.newCert).forEach(key => {
            props.fabricProps.newCert[key] === '' && missingFields.push(
                key.replace( /([A-Z])/g, " $1" ).toLowerCase()
            )
        })

        if (missingFields.length === 1) {
            alert(`Please complete the '${missingFields[0]}' field`)
        } else if (missingFields.length > 1) {
            alert(`Please complete the following fields: ${missingFields.map(field => `
                ${field}`)}
            `)
        } else if (missingFields.length === 0) {
            const data = {
                "english_name": props.fabricProps.formatName(props.fabricProps.newCert.name),
                "website": props.fabricProps.formatUrl(props.fabricProps.newCert.website),
                "approved_by_admin": false
            }

            const postRequestParams = {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)
            }

            fetch(`${config.API_URL}/api/certifications`,
                postRequestParams
            )
            .then(response => {
                if (response.status >= 400) {
                    throw new Error('Server responded with an error!')
                }
                return response.json()
            })
            .then(responseJson => {
                addCertification(responseJson)
            })
            props.fabricProps.setCertPopUp(false)
            props.fabricProps.setNewCert({
                name: '',
                website: ''
            })
        }    
    }

    return (
        <div id='fabrics'>
            <FormPage title={props.title}>
                <FormPromptWithSub 
                    prompt='Please enter the fabric details provided on the product webpage.'
                    promptSubtitle='If the product page does not provide the information detailed below, please select "not disclosed" from the dropdown.'
                />

                <FormFieldset
                    prompt='Fabric Dyeing, Printing, and Finishing'
                >
                    <FormDropdown
                        id='dye-finish-country-id'
                        name='dyeFinCountryId'
                        prompt='Dyeing and finishing country'
                        currentValue={props.fabFact.dyeFinCountryId}
                        options={makeCountryOptions()}
                        handleChange={event => fabChange(event)} 
                    />

                    <FormDropdown
                        id='dye-fin-id'
                        name='dyeFinId'
                        prompt='Dyeing and finishing factory'
                        currentValue={props.fabFact.dyeFinId}
                        options={makeFactoryOptions('factory')}
                        handleChange={event => fabChange(event)} 
                    />

                    <FormButton 
                        buttonText='ADD A FACTORY' 
                        handleClick={() => props.fabricProps.setDyeFactPopUp(true)}
                    />

                    <FormTextInput
                        id='dye-fin-notes'
                        name='dyeFinNotes'
                        prompt='Whether or not the factory is listed, are there notes about the dyeing/printing/finishing mill?  If so, copy them and paste them here.'
                        currentValue={props.fabFact.dyeFinNotes}
                        handleChange={event => fabChange(event)} 
                    />
                </FormFieldset>

                <FormFieldset
                    prompt='Knitting and Weaving'
                >
                    <FormDropdown 
                        id='wov-knit-country-id'
                        name='wovKnitCountryId'
                        prompt='Knitting or weaving country'
                        currentValue={props.fabFact.wovKnitCountryId}
                        options={makeCountryOptions()}
                        handleChange={event => fabChange(event)} 
                    />

                    <FormDropdown 
                        id='wov-knit-id'
                        name='wovKnitId'
                        prompt='Knitting/weaving fabric mill'
                        currentValue={props.fabFact.wovKnitId}
                        options={makeFactoryOptions('fabric mill')}
                        handleChange={event => fabChange(event)} 
                    />

                    <FormButton 
                        buttonText='ADD A FABRIC MILL' 
                        handleClick={() => props.fabricProps.setMillPopUp(true)}
                    />

                    <FormTextInput 
                        id='wov-knit-notes'
                        name='wovKnitNotes'
                        prompt='Whether or not the factory is listed, are there notes about the dyeing/printing/finishing mill?  If so, copy them and paste them here.'
                        currentValue={props.fabFact.wovKnitNotes}
                        handleChange={event => fabChange(event)} 
                    />
                </FormFieldset>

                <FormFieldset
                    prompt='Does the primary fabric have any of the following certifications?'
                >
                    <FormCheckboxSection
                        options={props.fabricProps.certificationList} 
                        selectedOptions={props.certChecks}
                        handleChange={event => fabCertChange(event)}
                    />

                    <FormButton
                        buttonText='ADD A CERTIFICATION'
                        handleClick={() => props.fabricProps.setCertPopUp(true)}
                    />
                </FormFieldset>

                <FormPromptWithSub
                    prompt='Fibers'
                    promptSubtitle='Please enter the fabric details provided on the product webpage.  If the product page does not provide the information detailed below, please select "not disclosed" from the dropdown.'
                />

                {props.fiberFieldsets.map((fiberFieldset, index) => {
                    return <fieldset key={index} className='NewProductForm__fieldset'>
                        <button
                            className='NewProductForm__remove'
                            type='button'
                            onClick={() => removeFiber(index)}
                        >
                            REMOVE
                        </button>

                        <FormDropdown 
                            id={'fiber-type-id-' + index}
                            name='fiberTypeId'
                            prompt='Fiber or material'
                            options={makeFiberOptions()}
                            currentValue={fiberFieldset.fiberTypeId} 
                            handleChange={event => {fibChangeInput(index, event)}}
                        />

                        <FormButton
                            buttonText='ADD A FIBER OR MATERIAL TYPE'
                            handleClick={() => props.fabricProps.setFiberPopUp(true)}
                        />

                        <FormNumberInput 
                            id={'fiber-type-percentage-' + index}
                            name='percentage'
                            prompt='Percentage of fabric content, if available'
                            currentValue={fiberFieldset.percentage === 0 ? '' : fiberFieldset.percentage} 
                            handleChange={event => {fibChangeInput(index, event)}}
                        />
    
                        <FormDropdown 
                            id={'fiber-origin' + index}
                            name='originId'
                            prompt='Fiber origin'
                            options={makeCountryOptions()}
                            currentValue={fiberFieldset.originId} 
                            handleChange={event => {fibChangeInput(index, event)}}
                        />

                        <FormDropdown 
                            id={'producer-id' + index}
                            name='producerId'
                            prompt='Fiber or material producer'
                            options={makeFactoryOptions('producer')}
                            currentValue={fiberFieldset.producerId}
                            handleChange={event => {fibChangeInput(index, event)}}
                        />

                        <FormButton 
                            buttonText='ADD A PRODUCER'
                            handleClick={() => props.fabricProps.setProducerPopUp(true)}
                        />

                        <FormPopUp
                            id={'fabric' + props.id + 'NewFibProducer'} 
                            status={prodPopUpStatus()}
                            title='New Producer'
                            close={() => handleClose()}
                            submit={() => submitFibProducer(index)}
                            buttonText='Submit Factory'
                        >
                            <FormTextInput 
                                id={props.id + 'NewProducerName'}
                                name='name'
                                prompt='Factory name'
                                currentValue={props.fabricProps.newProducer.name}
                                handleChange={event => newProducerChange(event)} 
                            />

                            <FormDropdown
                                id={props.id + 'NewProducerLocation'}
                                name='countryId'
                                prompt='Location'
                                currentValue={props.fabricProps.newProducer.countryId}
                                options={makeCountryOptions()}
                                handleChange={event => newProducerChange(event)} 
                            />

                            <FormUrlInput
                                id={props.id + 'NewProducerWebsite'}
                                name='website'
                                prompt='Website'
                                currentValue={props.fabricProps.newProducer.website}
                                handleChange={event => newProducerChange(event)}
                            />

                            <FormTextInput 
                                id={props.id + 'NewProducerNotes'}
                                name='notes'
                                prompt='Notes'
                                currentValue={props.fabricProps.newProducer.notes}
                                handleChange={event => newProducerChange(event)} 
                            />
                        </FormPopUp>

                        <FormTextInput
                            id={'producer-notes' + index}
                            name='producerNotes'
                            prompt='Whether or not the producer is listed, are there notes about the fiber or material producer?  If so, copy them and paste them here.'
                            currentValue={fiberFieldset.producerNotes}
                            handleChange={event => {fibChangeInput(index, event)}}
                        />

                        <FormPromptWithSub 
                            prompt=''
                            promptSubtitle='Does the fiber have any of the following certifications?'
                        />

                        <FormCheckboxSection
                            id={'fabric-certifications' + index}
                            name='certIds'
                            options={makeFibCertList(index)} 
                            selectedOptions={props.fiberFieldsets[index].certIds}
                            handleChange={event => fibCertChange(index, event.target.name)}
                        />

                        <FormButton
                            buttonText='ADD A CERTIFICATION'
                            handleClick={() => props.fabricProps.setCertPopUp(true)}
                        />
                    </fieldset>
                })}

                <FormButton 
                    buttonText='THIS FABRIC HAS ADDITIONAL FIBERS' 
                    handleClick={index => {addFiber()}}
                />
            </FormPage>

            <NPFFooter 
                buttons='prevNext'
                previousButton={() => props.fabricProps.setPage(props.fabricProps.currentPage - 1)}
                nextButton={event => nextButton(event)}
            />

            <FormPopUp
                id={props.id + 'NewFact'} 
                status={factPopUpStatus()}
                title='New Factory'
                close={() => handleClose()}
                submit={() => submitDyeFactory()}
                buttonText='Submit Factory'
            >
                <FormTextInput 
                    id={props.id + 'NewFactName'}
                    name='name'
                    prompt='Factory name'
                    currentValue={props.fabricProps.newFact.name}
                    handleChange={event => newFactChange(event)} 
                />
                <FormDropdown
                    id={props.id + 'NewFactLocation'}
                    name='countryId'
                    prompt='Location'
                    currentValue={props.fabricProps.newFact.countryId}
                    options={makeCountryOptions()}
                    handleChange={event => newFactChange(event)} 
                />
                <FormUrlInput
                    id={props.id + 'NewFactWebsite'}
                    name='website'
                    prompt='Website'
                    currentValue={props.fabricProps.newFact.website}
                    handleChange={event => newFactChange(event)}
                />
                <FormTextInput 
                    id={props.id + 'NewFactNotes'}
                    name='notes'
                    prompt='Notes'
                    currentValue={props.fabricProps.newFact.notes}
                    handleChange={event => newFactChange(event)} 
                />
            </FormPopUp>

            <FormPopUp
                id={props.id + 'NewMill'} 
                status={millPopUpStatus()}
                title='New Fabric Mill'
                close={() => handleClose()}
                submit={() => submitMill()}
                buttonText='SUBMIT FABRIC MILL'
            >
                <FormTextInput 
                    id={props.id + '-new-mill-name'}
                    name='name'
                    prompt='Fabric mill name'
                    currentValue={props.fabricProps.newMill.name}
                    handleChange={event => newMillChange(event)} 
                />

                <FormDropdown
                    id={props.id + 'NewMillLocation'}
                    name='countryId'
                    prompt='Location'
                    currentValue={props.fabricProps.newMill.countryId}
                    options={makeCountryOptions()}
                    handleChange={event => newMillChange(event)} 
                />

                <FormUrlInput
                    id={props.id + 'NewMillWebsite'}
                    name='website'
                    prompt='Website'
                    currentValue={props.fabricProps.newMill.website}
                    handleChange={event => newMillChange(event)}
                />

                <FormTextInput 
                    id={props.id + 'NewMillNotes'}
                    name='notes'
                    prompt='Notes'
                    currentValue={props.fabricProps.newMill.notes}
                    handleChange={event => newMillChange(event)} 
                />
            </FormPopUp>

            <FormPopUp
                id={'new-fiber'} 
                status={fibPopUpStatus()}
                title='New Fiber'
                close={() => handleClose()}
                submit={() => submitFiber()}
                buttonText='SUBMIT FIBER'
            >
                <FormTextInput 
                    id={'new-fiber-name'}
                    name='name'
                    prompt='Fiber name'
                    currentValue={props.fabricProps.newFiber.name}
                    handleChange={event => {
                        props.fabricProps.setNewFiber(
                            {
                                name: event.target.value
                            }
                        )
                    }} 
                />
            </FormPopUp>

            <FormPopUp
                id={props.id + 'NewCert'} 
                status={certPopUpStatus()}
                title='New Certification'
                close={() => handleClose()}
                submit={() => submitNewCert()}
                buttonText='SUBMIT CERTIFICATION'
            >
                <FormTextInput 
                    id={props.id + '-new-cert-name'}
                    name='name'
                    prompt='Certification name'
                    currentValue={props.fabricProps.newCert.name}
                    handleChange={event => newCertChange(event)} 
                />

                <FormUrlInput
                    id={props.id + '-new-cert-website'}
                    name='website'
                    prompt='Website'
                    currentValue={props.fabricProps.newCert.website}
                    handleChange={event => newCertChange(event)}
                />
            </FormPopUp>
        </div>
    )    
}

NPFFabrics.defaultProps = {
    certChecks: {},
    fabFact: {
        dyeFinCountryId: '',
        dyeFinId: '',
        dyeFinNotes: '',
        wovKnitCountryId: '',
        wovKnitId: '',
        wovKnitNotes: ''
    },
    fabricProps: {
        certificationList: [],
        certPopUp: false,
        countries: [],
        currentPage: 0,
        dyeFactPopUp: false,
        initCerts: {},
        factoryList: [],
        fiberPopUp: false,
        fiberTypeList: [],
        millPopUp: false,
        newCert: {
            name: '',
            website: ''
        },
        newFact: {
            name: '',
            countryId: '',
            website: '',
        },
        newFiber: {
            name: ''
        },
        newMill: {
            name: '',
            countryId: '',
            website: '',
            notes: ''
        },
        newProducer: {
            name: '',
            countryId: 0,
            website: '',
            notes: ''
        },
        producerPopUp: false,
        setCertificationList: () => {},
        setFiberTypeList: () => {},
        setCertPopUp: () => {},
        setDyeFactPopUp: () => {},
        setFactoryList: () => {},
        setFiberPopUp: () => {},
        setInitCerts: () => {},
        setMillPopUp: () => {},
        setNewCert:  () => {},
        setNewFact:  () => {},
        setNewFiber: () => {},
        setNewMill: () => {},
        setNewProducer: () => {},
        setPage: () => {},
        setProducerPopUp: () => {}
    },
    fiberFieldsets: [
        {
            fiberTypeId: 0,
            percentage: '',
            originId: 0,
            producerId: 0,
            producerNotes: '',
            certIds: []
        }
    ],
    setFabFact: () => {},
    setCertChecks: () => {},
    setFiberFieldsets: () => {}
}

export default NPFFabrics