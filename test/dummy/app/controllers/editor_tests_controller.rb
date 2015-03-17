class EditorTestsController < ApplicationController
  def new
    @editor_test ||= EditorTest.new
  end
end
