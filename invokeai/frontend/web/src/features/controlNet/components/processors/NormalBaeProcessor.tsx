import { Flex } from '@chakra-ui/react';
import IAISlider from 'common/components/IAISlider';
import { memo, useCallback } from 'react';
import { useProcessorNodeChanged } from '../hooks/useProcessorNodeChanged';
import { RequiredNormalbaeImageProcessorInvocation } from 'features/controlNet/store/types';
import { CONTROLNET_PROCESSORS } from 'features/controlNet/store/constants';

const DEFAULTS = CONTROLNET_PROCESSORS.normalbae_image_processor.default;

type Props = {
  controlNetId: string;
  processorNode: RequiredNormalbaeImageProcessorInvocation;
};

const NormalBaeProcessor = (props: Props) => {
  const { controlNetId, processorNode } = props;
  const { image_resolution, detect_resolution } = processorNode;
  const processorChanged = useProcessorNodeChanged();

  const handleDetectResolutionChanged = useCallback(
    (v: number) => {
      processorChanged(controlNetId, { detect_resolution: v });
    },
    [controlNetId, processorChanged]
  );

  const handleImageResolutionChanged = useCallback(
    (v: number) => {
      processorChanged(controlNetId, { image_resolution: v });
    },
    [controlNetId, processorChanged]
  );

  const handleDetectResolutionReset = useCallback(() => {
    processorChanged(controlNetId, {
      detect_resolution: DEFAULTS.detect_resolution,
    });
  }, [controlNetId, processorChanged]);

  const handleImageResolutionReset = useCallback(() => {
    processorChanged(controlNetId, {
      image_resolution: DEFAULTS.image_resolution,
    });
  }, [controlNetId, processorChanged]);

  return (
    <Flex sx={{ flexDirection: 'column', gap: 2 }}>
      <IAISlider
        label="Detect Resolution"
        value={detect_resolution}
        onChange={handleDetectResolutionChanged}
        handleReset={handleDetectResolutionReset}
        withReset
        min={0}
        max={4096}
        withInput
      />
      <IAISlider
        label="Image Resolution"
        value={image_resolution}
        onChange={handleImageResolutionChanged}
        handleReset={handleImageResolutionReset}
        withReset
        min={0}
        max={4096}
        withInput
      />
    </Flex>
  );
};

export default memo(NormalBaeProcessor);