import AvailableActivities from './todoListActivities.js';



  describe('removeActivity', () => {
    describe('removeActivity', () => {
      beforeEach(() => {
        localStorage.clear();
      });

      // test 3
      test('should remove the activity at the specified position from the activities array', () => {
        const initialActivities = [
          { description: 'Activity 1', completed: false, index: 1 },
          { description: 'Activity 2', completed: false, index: 2 },
          { description: 'Activity 3', completed: false, index: 3 },
        ];
        localStorage.setItem(
          'savedActivities',
          JSON.stringify(initialActivities),
        );

        const activities = new AvailableActivities();
        const result = activities.removeActivity(1);

        expect(result).toHaveLength(2);
        expect(result[0].index).toBe(1);
        expect(result[1].index).toBe(2);
      });

      // test 4
      test('should update the index of remaining activities after removing an activity', () => {
        const initialActivities = [
          { description: 'Activity 1', completed: false, index: 1 },
          { description: 'Activity 2', completed: false, index: 2 },
          { description: 'Activity 3', completed: false, index: 3 },
        ];
        localStorage.setItem(
          'savedActivities',
          JSON.stringify(initialActivities),
        );

        const activities = new AvailableActivities();

        activities.removeActivity(1);

        const storedActivities = JSON.parse(
          localStorage.getItem('savedActivities'),
        );
        expect(storedActivities).toHaveLength(2);
        expect(storedActivities[0].index).toBe(1);
        expect(storedActivities[1].index).toBe(2);
      });

      // test 5
      test('should update localStorage with the updated activities array after removing an activity', () => {
        const initialActivities = [
          { description: 'Activity 1', completed: false, index: 1 },
          { description: 'Activity 2', completed: false, index: 2 },
          { description: 'Activity 3', completed: false, index: 3 },
        ];
        localStorage.setItem(
          'savedActivities',
          JSON.stringify(initialActivities),
        );

        const activities = new AvailableActivities();

        activities.removeActivity(1);

        const storedActivities = JSON.parse(
          localStorage.getItem('savedActivities'),
        );
        expect(storedActivities).toHaveLength(2);
        expect(storedActivities[0]).toEqual({
          description: 'Activity 2',
          completed: false,
          index: 1,
        });
        expect(storedActivities[1]).toEqual({
          description: 'Activity 3',
          completed: false,
          index: 2,
        });
      });
    });
  });
});
