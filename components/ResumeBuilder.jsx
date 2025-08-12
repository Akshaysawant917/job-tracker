'use client';
import React, { useState, useRef } from 'react';
import { Download, Plus, Trash2, Phone, Mail, MapPin, Github, Linkedin } from 'lucide-react';

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: '',
      title: '',
      location: '',
      phone: '',
      email: '',
      linkedin: '',
      github: ''
    },
    skills: [
      {
        id: 1,
        category: '',
        items: ''
      }
    ],
    experience: [
      {
        id: 1,
        title: '',
        company: '',
        location: '',
        duration: '',
        responsibilities: ['']
      }
    ],
    projects: [
      {
        id: 1,
        name: '',
        type: '',
        description: '',
        technologies: '',
        link: ''
      }
    ],
    certifications: [''],
    education: [
      {
        id: 1,
        degree: '',
        institution: '',
        duration: ''
      }
    ]
  });

  const resumeRef = useRef();

  const updatePersonalInfo = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const updateSkills = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.map(skill =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    }));
  };

  const addSkill = () => {
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, {
        id: Date.now(),
        category: '',
        items: ''
      }]
    }));
  };

  const removeSkill = (id) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id)
    }));
  };

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, {
        id: Date.now(),
        title: '',
        company: '',
        location: '',
        duration: '',
        responsibilities: ['']
      }]
    }));
  };

  const updateExperience = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const addResponsibility = (expId) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp =>
        exp.id === expId ? { ...exp, responsibilities: [...exp.responsibilities, ''] } : exp
      )
    }));
  };

  const updateResponsibility = (expId, index, value) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp =>
        exp.id === expId ? {
          ...exp,
          responsibilities: exp.responsibilities.map((resp, i) => i === index ? value : resp)
        } : exp
      )
    }));
  };

  const removeExperience = (id) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const addProject = () => {
    setResumeData(prev => ({
      ...prev,
      projects: [...prev.projects, {
        id: Date.now(),
        name: '',
        type: '',
        description: '',
        technologies: '',
        link: ''
      }]
    }));
  };

  const updateProject = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.map(proj =>
        proj.id === id ? { ...proj, [field]: value } : proj
      )
    }));
  };

  const removeProject = (id) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.filter(proj => proj.id !== id)
    }));
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, {
        id: Date.now(),
        degree: '',
        institution: '',
        duration: ''
      }]
    }));
  };

  const updateEducation = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const removeEducation = (id) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const addCertification = () => {
    setResumeData(prev => ({
      ...prev,
      certifications: [...prev.certifications, '']
    }));
  };

  const updateCertification = (index, value) => {
    setResumeData(prev => ({
      ...prev,
      certifications: prev.certifications.map((cert, i) => i === index ? value : cert)
    }));
  };

  const removeCertification = (index) => {
    setResumeData(prev => ({
      ...prev,
      certifications: prev.certifications.filter((_, i) => i !== index)
    }));
  };

  const exportToPDF = () => {
    const printContent = resumeRef.current;
    const originalDisplay = printContent.style.display;
    
    // Temporarily show the resume for printing
    printContent.style.display = 'block';
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            @media print {
              @page { margin: 0; }
              body { margin: 1cm; }
            }
            body { 
              margin: 0; 
              font-family: 'Arial', sans-serif; 
              font-size: 14px; 
              line-height: 1.4;
            }
            .resume-container { 
              max-width: 800px; 
              margin: 0 auto; 
              padding: 20px; 
              background: white;
            }
            .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 10px; margin-bottom: 20px; }
            .name { font-size: 24px; font-weight: bold; margin-bottom: 5px; }
            .title { font-size: 16px; margin-bottom: 5px; }
            .contact-info { font-size: 12px; margin-bottom: 5px; }
            .section { margin-bottom: 20px; }
            .section-title { 
              font-size: 14px; 
              font-weight: bold; 
              text-transform: uppercase; 
              letter-spacing: 1px; 
              margin-bottom: 10px;
              border-bottom: 1px solid #333;
              padding-bottom: 2px;
            }
            .experience-item, .project-item, .education-item { margin-bottom: 15px; }
            .experience-header, .project-header { 
              display: flex; 
              justify-content: space-between; 
              align-items: center; 
              margin-bottom: 5px; 
            }
            .job-title, .project-name { font-weight: bold; }
            .company, .project-type { font-style: italic; }
            .duration, .location { font-size: 12px; }
            .responsibility { margin-bottom: 3px; }
            .skills-grid { display: grid; grid-template-columns: 1fr 3fr; gap: 10px; margin-bottom: 10px; }
            .skill-label { font-weight: bold; }
            ul { margin: 0; padding-left: 20px; }
            li { margin-bottom: 2px; }
          </style>
        </head>
        <body>
          ${printContent.innerHTML}
        </body>
      </html>
    `);
    
    printWindow.document.close();
    printWindow.onload = () => {
      printWindow.print();
      printWindow.close();
    };
    
    // Restore original display
    printContent.style.display = originalDisplay;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center mb-8">Resume Builder</h1>
          
          {/* Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column - Form */}
            <div className="space-y-8">
              
              {/* Personal Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={resumeData.personalInfo.name}
                    onChange={(e) => updatePersonalInfo('name', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Professional Title"
                    value={resumeData.personalInfo.title}
                    onChange={(e) => updatePersonalInfo('title', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    value={resumeData.personalInfo.location}
                    onChange={(e) => updatePersonalInfo('location', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      value={resumeData.personalInfo.phone}
                      onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={resumeData.personalInfo.email}
                      onChange={(e) => updatePersonalInfo('email', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="LinkedIn Profile"
                      value={resumeData.personalInfo.linkedin}
                      onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="GitHub Profile"
                      value={resumeData.personalInfo.github}
                      onChange={(e) => updatePersonalInfo('github', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Skills</h2>
                  <button
                    onClick={addSkill}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    <Plus size={16} className="mr-2" />
                    Add Skill Category
                  </button>
                </div>
                
                {resumeData.skills.map((skill, index) => (
                  <div key={skill.id} className="border border-gray-200 rounded-md p-4 mb-4 bg-white">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-medium">Skill Category {index + 1}</h3>
                      {resumeData.skills.length > 1 && (
                        <button
                          onClick={() => removeSkill(skill.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Category Name (e.g., Programming Languages, Design Tools, etc.)"
                        value={skill.category}
                        onChange={(e) => updateSkills(skill.id, 'category', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                      <textarea
                        placeholder="Skills (separate with commas)"
                        value={skill.items}
                        onChange={(e) => updateSkills(skill.id, 'items', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        rows="2"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Experience */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Experience</h2>
                  <button
                    onClick={addExperience}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    <Plus size={16} className="mr-2" />
                    Add Experience
                  </button>
                </div>
                
                {resumeData.experience.map((exp, index) => (
                  <div key={exp.id} className="border border-gray-200 rounded-md p-4 mb-4 bg-white">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-medium">Experience {index + 1}</h3>
                      {resumeData.experience.length > 1 && (
                        <button
                          onClick={() => removeExperience(exp.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Job Title"
                        value={exp.title}
                        onChange={(e) => updateExperience(exp.id, 'title', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Company Name"
                          value={exp.company}
                          onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        <input
                          type="text"
                          placeholder="Location"
                          value={exp.location}
                          onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Duration (e.g., Sep 2024 – Jul 2025)"
                        value={exp.duration}
                        onChange={(e) => updateExperience(exp.id, 'duration', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Responsibilities</label>
                        {exp.responsibilities.map((resp, respIndex) => (
                          <div key={respIndex} className="flex mb-2">
                            <textarea
                              placeholder="Describe your responsibility..."
                              value={resp}
                              onChange={(e) => updateResponsibility(exp.id, respIndex, e.target.value)}
                              className="flex-1 p-2 border border-gray-300 rounded-md"
                              rows="2"
                            />
                          </div>
                        ))}
                        <button
                          onClick={() => addResponsibility(exp.id)}
                          className="text-blue-600 hover:text-blue-800 text-sm"
                        >
                          + Add Responsibility
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Projects */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Projects</h2>
                  <button
                    onClick={addProject}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    <Plus size={16} className="mr-2" />
                    Add Project
                  </button>
                </div>
                
                {resumeData.projects.map((project, index) => (
                  <div key={project.id} className="border border-gray-200 rounded-md p-4 mb-4 bg-white">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-medium">Project {index + 1}</h3>
                      {resumeData.projects.length > 1 && (
                        <button
                          onClick={() => removeProject(project.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Project Name"
                          value={project.name}
                          onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        <input
                          type="text"
                          placeholder="Project Type (e.g., Company Project)"
                          value={project.type}
                          onChange={(e) => updateProject(project.id, 'type', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <textarea
                        placeholder="Project Description"
                        value={project.description}
                        onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        rows="3"
                      />
                      <input
                        type="text"
                        placeholder="Technologies Used"
                        value={project.technologies}
                        onChange={(e) => updateProject(project.id, 'technologies', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                      <input
                        type="text"
                        placeholder="Project Link (optional)"
                        value={project.link}
                        onChange={(e) => updateProject(project.id, 'link', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Certifications</h2>
                  <button
                    onClick={addCertification}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    <Plus size={16} className="mr-2" />
                    Add Certification
                  </button>
                </div>
                
                {resumeData.certifications.map((cert, index) => (
                  <div key={index} className="flex mb-3">
                    <input
                      type="text"
                      placeholder="Certification Name & Details"
                      value={cert}
                      onChange={(e) => updateCertification(index, e.target.value)}
                      className="flex-1 p-2 border border-gray-300 rounded-md mr-2"
                    />
                    {resumeData.certifications.length > 1 && (
                      <button
                        onClick={() => removeCertification(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Education</h2>
                  <button
                    onClick={addEducation}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    <Plus size={16} className="mr-2" />
                    Add Education
                  </button>
                </div>
                
                {resumeData.education.map((edu, index) => (
                  <div key={edu.id} className="border border-gray-200 rounded-md p-4 mb-4 bg-white">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-medium">Education {index + 1}</h3>
                      {resumeData.education.length > 1 && (
                        <button
                          onClick={() => removeEducation(edu.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Degree & Field of Study"
                        value={edu.degree}
                        onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                      <input
                        type="text"
                        placeholder="Institution Name & Location"
                        value={edu.institution}
                        onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                      <input
                        type="text"
                        placeholder="Duration (e.g., 2016 – 2020)"
                        value={edu.duration}
                        onChange={(e) => updateEducation(edu.id, 'duration', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Preview */}
            <div className="lg:sticky lg:top-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Preview</h2>
                  <button
                    onClick={exportToPDF}
                    className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    <Download size={16} className="mr-2" />
                    Export PDF
                  </button>
                </div>
                
                {/* Resume Preview */}
                <div 
                  ref={resumeRef}
                  className="resume-container bg-white p-6 border border-gray-300 text-sm leading-relaxed"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                >
                  {/* Header */}
                  <div className="header text-center border-b-2 border-black pb-2 mb-4">
                    <div className="name text-2xl font-bold mb-1">
                      {resumeData.personalInfo.name || 'Your Name'}
                    </div>
                    <div className="title text-base mb-1">
                      {resumeData.personalInfo.title || 'Your Professional Title'}
                    </div>
                    <div className="contact-info text-xs space-y-1">
                      {resumeData.personalInfo.phone && (
                        <div>{resumeData.personalInfo.phone}</div>
                      )}
                      {resumeData.personalInfo.email && (
                        <div>{resumeData.personalInfo.email}</div>
                      )}
                      {(resumeData.personalInfo.linkedin || resumeData.personalInfo.github) && (
                        <div className="flex justify-center space-x-4">
                          {resumeData.personalInfo.linkedin && (
                            <span>{resumeData.personalInfo.linkedin}</span>
                          )}
                          {resumeData.personalInfo.github && (
                            <span>{resumeData.personalInfo.github}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="section mb-4">
                    <div className="section-title text-sm font-bold uppercase tracking-wide border-b border-black pb-1 mb-2">
                      Skills
                    </div>
                    <div className="space-y-2">
                      {resumeData.skills.map((skill) => (
                        skill.category && skill.items && (
                          <div key={skill.id} className="skills-grid grid grid-cols-4 gap-2">
                            <div className="skill-label font-bold">{skill.category}:</div>
                            <div className="col-span-3">{skill.items}</div>
                          </div>
                        )
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="section mb-4">
                    <div className="section-title text-sm font-bold uppercase tracking-wide border-b border-black pb-1 mb-2">
                      Experience
                    </div>
                    
                    {resumeData.experience.map((exp) => (
                      <div key={exp.id} className="experience-item mb-3">
                        <div className="experience-header flex justify-between items-center mb-1">
                          <div>
                            <div className="job-title font-bold">{exp.title}</div>
                            <div className="company italic">{exp.company}, {exp.location}</div>
                          </div>
                          <div className="duration text-xs">{exp.duration}</div>
                        </div>
                        <ul className="list-disc ml-5">
                          {exp.responsibilities.map((resp, index) => (
                            resp && <li key={index} className="responsibility mb-1">{resp}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Projects */}
                  <div className="section mb-4">
                    <div className="section-title text-sm font-bold uppercase tracking-wide border-b border-black pb-1 mb-2">
                      Projects
                    </div>
                    
                    {resumeData.projects.map((project) => (
                      <div key={project.id} className="project-item mb-3">
                        <div className="project-header flex justify-between items-start mb-1">
                          <div>
                            <div className="project-name font-bold">
                              {project.name}
                              {project.link && (
                                <span className="text-xs ml-2">| Link: {project.link}</span>
                              )}
                            </div>
                            <div className="project-type italic">{project.type}</div>
                          </div>
                        </div>
                        {project.description && (
                          <div className="mb-1">{project.description}</div>
                        )}
                        {project.technologies && (
                          <div className="text-xs">Technologies: {project.technologies}</div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Certifications */}
                  {resumeData.certifications.some(cert => cert.trim()) && (
                    <div className="section mb-4">
                      <div className="section-title text-sm font-bold uppercase tracking-wide border-b border-black pb-1 mb-2">
                        Certifications
                      </div>
                      {resumeData.certifications.map((cert, index) => (
                        cert.trim() && (
                          <div key={index} className="mb-1">
                            {cert}
                          </div>
                        )
                      ))}
                    </div>
                  )}

                  {/* Education */}
                  <div className="section mb-4">
                    <div className="section-title text-sm font-bold uppercase tracking-wide border-b border-black pb-1 mb-2">
                      Education
                    </div>
                    
                    {resumeData.education.map((edu) => (
                      <div key={edu.id} className="education-item mb-2">
                        <div className="font-bold">{edu.degree}</div>
                        <div className="italic">{edu.institution} | {edu.duration}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;