#version 330 core
out vec4 FragColor;

in vec3 ourColor;
in vec2 texCoord;

uniform sampler2D ourText1;
uniform sampler2D ourText2;

void main()
{
	FragColor = mix(texture(ourText1, texCoord), texture(ourText2, texCoord), 0.2);
}