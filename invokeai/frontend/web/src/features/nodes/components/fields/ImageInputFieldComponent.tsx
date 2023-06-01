import { useAppDispatch } from 'app/store/storeHooks';

import { fieldValueChanged } from 'features/nodes/store/nodesSlice';
import {
  ImageInputFieldTemplate,
  ImageInputFieldValue,
} from 'features/nodes/types/types';
import { memo, useCallback } from 'react';

import { FieldComponentProps } from './types';
import IAISelectableImage from 'features/controlNet/components/parameters/IAISelectableImage';
import { ImageDTO } from 'services/api';
import { Flex } from '@chakra-ui/react';

const ImageInputFieldComponent = (
  props: FieldComponentProps<ImageInputFieldValue, ImageInputFieldTemplate>
) => {
  const { nodeId, field } = props;

  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (image: ImageDTO) => {
      dispatch(
        fieldValueChanged({
          nodeId,
          fieldName: field.name,
          value: image,
        })
      );
    },
    [dispatch, field.name, nodeId]
  );

  return (
    <Flex
      sx={{
        w: 'full',
        h: 'full',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <IAISelectableImage image={field.value} onChange={handleChange} />
    </Flex>
  );
};

export default memo(ImageInputFieldComponent);
