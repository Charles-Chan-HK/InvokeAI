/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ContentShuffleImageProcessorInvocation = {
  description: `Applies content shuffle processing to image`,
  properties: {
    id: {
      type: 'string',
      description: `The id of this node. Must be unique among all nodes.`,
      isRequired: true,
    },
    type: {
      type: 'Enum',
    },
    image: {
      type: 'all-of',
      description: `image to process`,
      contains: [{
        type: 'ImageField',
      }],
    },
    detect_resolution: {
      type: 'number',
      description: `pixel resolution for edge detection`,
    },
    image_resolution: {
      type: 'number',
      description: `pixel resolution for output image`,
    },
    'h': {
      type: 'number',
      description: `content shuffle h parameter`,
    },
    'w': {
      type: 'number',
      description: `content shuffle w parameter`,
    },
    'f': {
      type: 'number',
      description: `cont`,
    },
  },
} as const;