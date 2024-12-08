import { useCallback, useState } from 'react';
import { updateMissionStatus } from '@/hooks/api/please';
import { usePleaseStore } from '@/stores/usePleaseStore';

export default function useMissionStatus(
    initialStatus: 'BEF' | 'INP' | 'AFT',
    petMissionId: number,
) {
    const { setMissionStatus, getMissionStatus } = usePleaseStore();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // 초기 상태 설정
    const status = getMissionStatus(petMissionId) ?? initialStatus;

    const updateInitialStatus = useCallback(
        (newStatus: 'BEF' | 'INP' | 'AFT') => {
            setMissionStatus(petMissionId, newStatus);
        },
        [petMissionId, setMissionStatus],
    );

    const changeMissionStatus = useCallback(
        async (newStatus: 'BEF' | 'INP' | 'AFT') => {
            setIsLoading(true);
            setError(null);

            try {
                await updateMissionStatus(petMissionId, newStatus);
                setMissionStatus(petMissionId, newStatus);
                return true;
            } catch (err) {
                setError('상태 변경 중 오류가 발생했습니다.');
                console.error(err);
                return false;
            } finally {
                setIsLoading(false);
            }
        },
        [petMissionId, setMissionStatus],
    );

    return {
        status,
        changeMissionStatus,
        updateInitialStatus,
        isLoading,
        error,
    };
}
