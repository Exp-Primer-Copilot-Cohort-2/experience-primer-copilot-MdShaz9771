function skillsMember() {
    return {
        name: 'member',
        skills: ['html', 'css', 'javascript'],
        showSkills: function () {
            this.skills.forEach(skill => {
                console.log(`${this.name} knows ${skill}`);
            });
        }
    };
}