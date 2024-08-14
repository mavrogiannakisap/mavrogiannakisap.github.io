document.addEventListener('DOMContentLoaded', function () {
    // Publications Page
    const addPublicationBtn = document.getElementById('add-publication');
    const publicationForm = document.getElementById('publication-form');
    const savePublicationBtn = document.getElementById('save-publication');
    const publicationList = document.getElementById('publication-list');

    addPublicationBtn.addEventListener('click', function () {
        publicationForm.style.display = 'block';
    });

    savePublicationBtn.addEventListener('click', function () {
        const title = document.getElementById('pub-title').value;
        const authors = document.getElementById('pub-authors').value;
        const conferenceDate = document.getElementById('pub-conference-date').value;
        const abstract = document.getElementById('pub-abstract').value;

        if (title && authors && conferenceDate && abstract) {
            const publicationItem = document.createElement('div');
            publicationItem.className = 'publication';
            publicationItem.innerHTML = `
                <div>
                    <span style="border-left: 5px solid darkblue; padding-left: 10px;">${title}</span>
                    <button onclick="toggleAbstract(this)">Show Abstract</button>
                </div>
                <div class="abstract">${abstract}</div>
            `;
            publicationList.appendChild(publicationItem);
            publicationForm.reset();
            publicationForm.style.display = 'none';
        }
    });

    // Function to toggle abstract visibility
    window.toggleAbstract = function (button) {
        const abstract = button.nextElementSibling;
        if (abstract.style.display === 'block') {
            abstract.style.display = 'none';
            button.textContent = 'Show Abstract';
        } else {
            abstract.style.display = 'block';
            button.textContent = 'Hide Abstract';
        }
    };

    // Experience Page
    const addExperienceBtn = document.getElementById('add-experience');
    const experienceForm = document.getElementById('experience-form');
    const saveExperienceBtn = document.getElementById('save-experience');
    const experienceTable = document.querySelector('#experience-table tbody');

    addExperienceBtn.addEventListener('click', function () {
        experienceForm.style.display = 'block';
    });

    saveExperienceBtn.addEventListener('click', function () {
        const company = document.getElementById('exp-company').value;
        const position = document.getElementById('exp-position').value;
        const startDate = document.getElementById('exp-start-date').value;
        const endDate = document.getElementById('exp-end-date').value;
        const description = document.getElementById('exp-description').value;

        if (company && position && startDate && endDate && description) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${company}</td>
                <td>${position}</td>
                <td>${startDate}</td>
                <td>${endDate}</td>
                <td>${description}</td>
            `;
            experienceTable.appendChild(row);
            experienceForm.reset();
            experienceForm.style.display = 'none';
        }
    });

    // Education Page
    const addEducationBtn = document.getElementById('add-education');
    const educationForm = document.getElementById('education-form');
    const saveEducationBtn = document.getElementById('save-education');
    const educationTable = document.querySelector('#education-table tbody');

    addEducationBtn.addEventListener('click', function () {
        educationForm.style.display = 'block';
    });

    saveEducationBtn.addEventListener('click', function () {
        const institution = document.getElementById('edu-institution').value;
        const degree = document.getElementById('edu-degree').value;
        const startDate = document.getElementById('edu-start-date').value;
        const endDate = document.getElementById('edu-end-date').value;
        const description = document.getElementById('edu-description').value;

        if (institution && degree && startDate && endDate && description) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${institution}</td>
                <td>${degree}</td>
                <td>${startDate}</td>
                <td>${endDate}</td>
                <td>${description}</td>
            `;
            educationTable.appendChild(row);
            educationForm.reset();
            educationForm.style.display = 'none';
        }
    });

    // Blog Page
    const addBlogPostBtn = document.getElementById('add-blog-post');
    const blogPostForm = document.getElementById('blog-post-form');
    const saveBlogPostBtn = document.getElementById('save-blog-post');
    const blogPosts = document.getElementById('blog-posts');

    addBlogPostBtn.addEventListener('click', function () {
        blogPostForm.style.display = 'block';
    });

    saveBlogPostBtn.addEventListener('click', function () {
        const title = document.getElementById('blog-title').value;
        const date = document.getElementById('blog-date').value;
        const author = document.getElementById('blog-author').value;
        const content = document.getElementById('blog-content').value;

        if (title && date && author && content) {
            const blogPostItem = document.createElement('div');
            blogPostItem.className = 'blog-post';
            blogPostItem.innerHTML = `
                <h2>${title}</h2>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Author:</strong> ${author}</p>
                <p>${content}</p>
            `;
            blogPosts.appendChild(blogPostItem);
            blogPostForm.reset();
            blogPostForm.style.display = 'none';
        }
    });
});

