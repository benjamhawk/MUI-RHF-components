# MUI-React-Hook-Form

MUI-React-Hook-Form is a library that extracts common Material UI and React-Hook-Form integrations. This library provides building blocks to quickly start building forms without limiting any of the customizability that MUI offers. All of the props exposed by MUI are still accessible.

## Installation

```bash
npm install mui-react-hook-form
```

## Quick Start

```javascript
import {
  CheckboxGroup,
  Form,
  RadioButtonGroup,
  SelectInput,
  TextField
} from 'mui-react-hook-form'
import { useForm } from 'react-hook-form'
import { Button } from '@material-ui/core'

const App = () => {
  const formMethods = useForm()
  const onSubmit = (submittedData) => console.log(submittedData)

  return (

      <Form
        formMethods={formMethods}
        onSubmit={onSubmit}>
        <TextField name="firstName" label="first name" />
        <SelectInput
          name="state"
          label="State"
          options={[
            { value: 'IL', label: 'Illinois' },
            { value: 'MO', label: 'Missouri' }
          ]}
        />
        <CheckboxGroup
          name="foods"
          label="Foods I Like"
          options={[
            { value: 'pizza', label: 'Pizza' },
            { value: 'salad', label: 'Salad' }
          ]}
        />
        <RadioButtonGroup
          name="favoriteColor"
          label="Favorite Color"
          options={[
            { value: 'red', label: 'Red' },
            { value: 'blue', label: 'Blue' }
          ]}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default App
```

## Examples

Coming Soon!

## API

### Form

| Props       | Options                                                          | Required | Description                                                        |
| ----------- | ---------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| formMethods | [useForm return values](https://react-hook-form.com/api/useform) | x        | this prop provides the RHF form Methods to all children components |
| onSubmit    | function handler                                                 | x        | hanldes submit event                                               |

Any other props that are given will be passed down to the form component

### TextField

| Props              | Options                                                                        | Required | Description                                                                              |
| ------------------ | ------------------------------------------------------------------------------ | -------- | ---------------------------------------------------------------------------------------- |
| name               | string                                                                         | x        | [Unique Name for RHF](https://react-hook-form.com/api/usecontroller/controller)          |
| label              | string                                                                         |          | input label                                                                              |
| defaultValue       | string or number                                                               |          | [Default Value for Controller](https://react-hook-form.com/api/usecontroller/controller) |
| useControllerProps | [useControllerProps](https://react-hook-form.com/api/usecontroller/controller) |          | allows acces to RHF useController Prop                                                   |

Any other props that are given will be passed down to the input component

### SelectInput

| Props              | Options                                                                        | Required | Description                                                                              |
| ------------------ | ------------------------------------------------------------------------------ | -------- | ---------------------------------------------------------------------------------------- |
| name               | string                                                                         | x        | [Unique Name for RHF](https://react-hook-form.com/api/usecontroller/controller)          |
| options            | { value: any; label: string }[]                                                | x        | select options                                                                           |
| label              | string                                                                         |          | input label                                                                              |
| defaultValue       | string or number                                                               |          | [Default Value for Controller](https://react-hook-form.com/api/usecontroller/controller) |
| useControllerProps | [useControllerProps](https://react-hook-form.com/api/usecontroller/controller) |          | allows acces to RHF useController Prop                                                   |

Any other props that are given will be passed down to the input component

### Checkbox Group

| Props                 | Options                                                                                       | Required | Description                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------- |
| name                  | string                                                                                        | x        | [Unique Name for RHF](https://react-hook-form.com/api/usecontroller/controller) |
| options               | { value: any; label: string }[]                                                               | x        | value/label for checkbox                                                        |
| label                 | string                                                                                        |          | label for group                                                                 |
| controllerProps       | [controllerProps](https://react-hook-form.com/api/usecontroller/controller)                   |          | allows acces to RHF useController Prop                                          |
| formLabelProps        | [formLabelProps](https://material-ui.com/api/form-label/#formlabel-api)                       |          | allows access to MUI formLabel Prop                                             |
| formGroupProps        | [formGroupProps](https://material-ui.com/api/form-group/#formgroup-api)                       |          | allows access to MUI formGroup Prop                                             |
| formControlProps      | [formControlProps](https://material-ui.com/api/form-control/#formcontrol-api)                 |          | allows access to MUI formControl Prop                                           |
| formControlLabelProps | [formControlLabelProps](https://material-ui.com/api/form-control-label/#formcontrollabel-api) |          | allows access to MUI formControlLabel Prop                                      |
| checkboxProps         | [checkboxProps](https://material-ui.com/api/checkbox/#checkbox-api)                           |          | allows access to MUI Checkbox Prop                                              |

### RadioButtonGroup

| Props                 | Options                                                                                       | Required | Description                                                                              |
| --------------------- | --------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------- |
| name                  | string                                                                                        | x        | [Unique Name for RHF](https://react-hook-form.com/api/usecontroller/controller)          |
| options               | { value: any; label: string }[]                                                               | x        | value/label for checkbox                                                                 |
| label                 | string                                                                                        |          | label for group                                                                          |
| defaultValue          | string or number                                                                              |          | [Default Value for Controller](https://react-hook-form.com/api/usecontroller/controller) |
| useControllerProps    | [useControllerProps](https://react-hook-form.com/api/usecontroller/controller)                |          | allows acces to RHF useController Prop                                                   |
| formLabelProps        | [formLabelProps](https://material-ui.com/api/form-label/#formlabel-api)                       |          | allows access to MUI formLabel Prop                                                      |
| radioGroupProps       | [radioGroupProps](https://material-ui.com/api/radio-group/)                                   |          | allows access to MUI radioGroup Prop                                                     |
| formControlProps      | [formControlProps](https://material-ui.com/api/form-control/#formcontrol-api)                 |          | allows access to MUI formControl Prop                                                    |
| formControlLabelProps | [formControlLabelProps](https://material-ui.com/api/form-control-label/#formcontrollabel-api) |          | allows access to MUI formControlLabel Prop                                               |
| radioProps            | [checkboxProps](https://material-ui.com/api/radio/)                                           |          | allows access to MUI Radio Prop                                                          |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
