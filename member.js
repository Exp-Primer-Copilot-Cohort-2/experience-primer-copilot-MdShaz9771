function skillsMember() {
    const skills = [
        'JavaScript',
        'HTML',
        'CSS',
        'React',
        'Node.js',
        'Express',
        'MongoDB'
    ];

    return {
        getSkills: function() {
            return skills;
        },
        addSkill: function(skill) {
            if (!skills.includes(skill)) {
                skills.push(skill);
            }
        },
        removeSkill: function(skill) {
            const index = skills.indexOf(skill);
            if (index > -1) {
                skills.splice(index, 1);
            }
        }
    };
}

module.exports = skillsMember;