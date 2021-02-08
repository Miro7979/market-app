import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import CategoryPickerItem from '../component/CategoryPickerItem';

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from '../component/forms';
import FormImagePicker from '../component/forms/FormImagePicker';
import Screen from '../component/Screen';
import listingsApi from '../api/listings';
import useLocation from '../hooks/useLocation';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image.'),
});

const categories = [
  { label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'apps' },
  { label: 'Cars', value: 2, backgroundColor: 'green', icon: 'email' },
  { label: 'Houses', value: 3, backgroundColor: 'blue', icon: 'lock' },
];

function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );
    setUploadVisible(false);

    if (!result.ok)
      return alert('Could not save the listing. ');
    alert('Success');
  }
  return (
    <Screen style={styles.container}>
      <UploadScreen progress={progress} visible={uploadVisible} />
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: []
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name='images' />
        <AppFormField maxLength={255} name='title' placeholder='Title' />
        <AppFormField
          keybordType='numeric'
          maxLength={8}
          name='price'
          placeholder='Price'
          width={150}
        />
        <AppFormPicker
          items={categories}
          name='category'
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder='Category'
          width='50%'
        />
        <AppFormField
          maxLength={255}
          multiline={true}
          name='description'
          numberOfLines={3}
          placeholder='Description'
        />
        <SubmitButton title='Post' />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

export default ListingEditScreen;